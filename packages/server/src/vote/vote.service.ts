import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Connection, Repository } from 'typeorm';
import { GraphQLUserContext } from '../users/users';
import { PostEntity } from './../posts/posts.entity';
import { VoteEntity } from './vote.entity';
import { Vote, VoteType } from './vote.type';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private voteRepository: Repository<VoteEntity>,
    private connection: Connection,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}
  public async addVote({ post_id, voteType }: Vote): Promise<number | null> {
    const postRepository = this.connection.getRepository(PostEntity);
    try {
      const voted: VoteEntity[] = await this.voteRepository
        .createQueryBuilder()
        .select('*')
        .whereInIds([
          { user: { user_id: this.getUserId() }, post: { post_id } },
        ])
        .execute();
      if (voted.length > 0) {
        const [{ vote_type }] = voted;
        if (this.toVoteType(vote_type) !== voteType) {
          await this.voteRepository.update(
            { post: { post_id }, user: { user_id: this.getUserId() } },
            { vote_type: voteType },
          );
          const updated = await postRepository
            .createQueryBuilder()
            .update()
            .set({
              vote_count: () =>
                voteType === VoteType.UP ? 'vote_count + 1' : 'vote_count - 1',
            })
            .where('post_id = :post_id', { post_id: post_id })
            .execute();
        }
      } else {
        const voteSchema = this.voteRepository.create({
          post: { post_id },
          user: { user_id: this.getUserId() },
          vote_type: voteType,
        });
        await this.voteRepository.save(voteSchema);
        const updated = await postRepository
          .createQueryBuilder()
          .update()
          .set({
            vote_count: () =>
              voteType === VoteType.UP ? 'vote_count + 1' : 'vote_count - 1',
          })
          .where('post_id = :post_id', { post_id: post_id })
          .execute();
        if (updated.affected == 0) {
          throw new Error();
        }
      }
    } catch (error) {
      console.log(error);
      return null;
    }
    const { vote_count } = await postRepository.findOne(post_id, {
      select: ['vote_count'],
    });

    return vote_count < 0 ? 0 : vote_count;
  }
  private getUserId(): string {
    return this.context.session.user;
  }
  private toVoteType(str: any): VoteType {
    return str === '0' ? VoteType.UP : VoteType.DOWN;
  }
}
