import { subCreateValidation } from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { GraphQLUserContext } from 'src/users/users';
import { Repository } from 'typeorm';
import { shapeError, sqlError } from './../shared/shapeError';
import { SubError, SubInput } from './subbluedit.types';
import { SubEntity } from './subluedit.entity';

@Injectable()
export class SubblueditService {
  constructor(
    @InjectRepository(SubEntity)
    private subRepository: Repository<SubEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}
  async createSub({ displayName, name }: SubInput): Promise<SubError> {
    try {
      await subCreateValidation.validate({ displayName, name });
    } catch (error) {
      return shapeError(error);
    }
    try {
      await this.subRepository
        .createQueryBuilder()
        .insert()
        .values({
          name: name,
          displayName,
          user: { user_id: this.getUserId() },
        })
        .execute();
    } catch (error) {
      return sqlError(error, 'subbluedit', 'name');
    }
  }
  private getUserId(): string {
    return this.context.session.user;
  }
}
