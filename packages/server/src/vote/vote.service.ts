import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Connection, Repository } from 'typeorm';
import { PostEntity } from './../posts/posts.entity';
import { update_v_c } from './../posts/updatevote.consumer';
import { UserAuthHelpService } from './../shared/userauth.service';
import { VoteEntity } from './vote.entity';
import { Vote, VoteType } from './vote.type';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private voteRepository: Repository<VoteEntity>,
    private connection: Connection,
    private userAuthHelpService: UserAuthHelpService,
    @InjectQueue(update_v_c) private voteQueue: Queue,
  ) {}
  public async isVoted({ post_id }): Promise<boolean> {
    const voted: VoteEntity[] = await this.voteRepository
      .createQueryBuilder()
      .select('*')
      .whereInIds([
        {
          user: { user_id: this.userAuthHelpService.getUser() },
          post: { post_id },
        },
      ])
      .execute();

    if (voted.length > 0) {
      return true;
    }
    return false;
  }
  public async addVote({ post_id, voteType }: Vote): Promise<number | null> {
    const postRepository = this.connection.getRepository(PostEntity);
    try {
      const voted: VoteEntity[] = await this.voteRepository
        .createQueryBuilder()
        .select('*')
        .whereInIds([
          {
            user: { user_id: this.userAuthHelpService.getUser() },
            post: { post_id },
          },
        ])
        .execute();

      if (voted.length > 0) {
        const [{ vote_type }] = voted;
        if (this.toVoteType(vote_type) !== voteType) {
          await this.voteRepository.update(
            {
              post: { post_id },
              user: { user_id: this.userAuthHelpService.getUser() },
            },
            { vote_type: voteType },
          );
          this.saveVoteCount(voteType, post_id);
          this.saveVoteCount(voteType, post_id);
        }
      } else {
        const voteSchema = this.voteRepository.create({
          post: { post_id },
          user: { user_id: this.userAuthHelpService.getUser() },
          vote_type: voteType,
        });
        await this.voteRepository.save(voteSchema);
        this.saveVoteCount(voteType, post_id);
      }
    } catch (error) {
      return null;
    }
    const { vote_count } = await postRepository.findOne(post_id, {
      select: ['vote_count'],
    });

    return vote_count < 0 ? 0 : vote_count;
  }
  private toVoteType(str: any): VoteType {
    return str === '0' ? VoteType.UP : VoteType.DOWN;
  }
  private saveVoteCount(voteType: VoteType, post_id: string) {
    this.voteQueue.add({ post_id, TYPE: voteType });
  }
}
