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
    } catch (error) {
      return null;
    }
    const { vote_count } = await postRepository.findOne(post_id, {
      select: ['vote_count'],
    });

    return vote_count;
  }
}
