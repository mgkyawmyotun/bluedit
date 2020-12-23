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
  public async addVote({ post_id, voteType }: Vote): Promise<number> {
    const postRepository = this.connection.getRepository(PostEntity);
    const result = await postRepository
      .createQueryBuilder()
      .update({ post_id })
      .set({
        vote_count: () =>
          voteType === VoteType.UP ? 'vote_count + 1' : 'vote_count - 1',
      })
      .execute();
    return result.affected;
  }
}
