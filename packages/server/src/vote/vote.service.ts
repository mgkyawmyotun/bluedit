import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { update_v_c } from 'src/consumer/consumer.name';
import { Repository } from 'typeorm';
import { UserAuthHelpService } from './../shared/userauth.service';
import { VoteEntity } from './vote.entity';
import { Vote, VoteError, VoteType } from './vote.type';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private voteRepository: Repository<VoteEntity>,
    private userAuthHelpService: UserAuthHelpService,
    @InjectQueue(update_v_c) private voteQueue: Queue,
  ) {}
  public async isVoted({ post_id }): Promise<null | VoteType> {
    const voted = await this.voteRepository.findOne({
      post: { post_id: post_id },
      user: {
        user_id: this.userAuthHelpService.getUser(),
      },
    });
    if (!voted) {
      return null;
    }
    return this.toVoteType(voted.vote_type + '');
  }
  public async addVote({ post_id, voteType }: Vote): Promise<VoteError | null> {
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
      return { message: 'Error At Creating Vote', path: 'vote' };
    }

    return null;
  }
  private toVoteType(str: any): VoteType {
    return str === '0' ? VoteType.UP : VoteType.DOWN;
  }
  private saveVoteCount(voteType: VoteType, post_id: string) {
    this.voteQueue.add({ post_id, TYPE: voteType });
  }
}
