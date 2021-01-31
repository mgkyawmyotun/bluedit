import { subCreateValidation } from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCacheService } from './../cacheController/sub.cache.service';
import { shapeError, sqlError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { JoinEntity } from './join.entity';
import { SubError, SubInput, SubSearchInput } from './subbluedit.types';
import { SubEntity } from './subluedit.entity';

@Injectable()
export class SubblueditService {
  constructor(
    @InjectRepository(SubEntity)
    private subRepository: Repository<SubEntity>,
    private userAuthHelpService: UserAuthHelpService,
    @InjectRepository(JoinEntity)
    private joinRepository: Repository<JoinEntity>,
    private subCacheService: SubCacheService,
  ) {}
  async createSub({ displayName, name }: SubInput): Promise<SubError> {
    try {
      await subCreateValidation.validate({ displayName, name });
    } catch (error) {
      return shapeError(error);
    }
    try {
      const sub = this.subRepository.create({
        name,
        displayName,
        user: { user_id: this.userAuthHelpService.getUser() },
      });
      const sub_ent = await this.subRepository.save(sub);
      this.subCacheService.addSub(sub_ent);
      this.joinSub(name);
    } catch (error) {
      return sqlError(error, 'subbluedit', 'name');
    }
  }
  async joinSub(subName: string): Promise<SubError> {
    const join = await this.joinRepository.findOne({
      where: {
        sub: { name: subName },
        user: { user_id: this.userAuthHelpService.getUser() },
      },
      relations: ['sub'],
    });
    if (join) {
      return {
        path: 'subName',
        message: 'Already Joined',
      };
    }
    const joinEntity = this.joinRepository.create({
      sub: { name: subName },
      user: { user_id: this.userAuthHelpService.getUser() },
    });
    try {
      await this.joinRepository.save(joinEntity);
    } catch (error) {
      if (error.errno === 1452) {
        return {
          path: 'join-sub',
          message: 'Not A Valid SubName',
        };
      }
      return {
        path: 'join-sub',
        message: 'Error At Joining SubBluedit',
      };
    }
  }
  async leaveSub(subName: string) {
    const join = await this.joinRepository.findOne({
      where: {
        sub: { name: subName },
        user: { user_id: this.userAuthHelpService.getUser() },
      },
      relations: ['sub'],
    });
    if (!join) {
      return {
        path: 'leave subName',
        message: 'Cannot Leave Without Join',
      };
    }
    try {
      await this.joinRepository.delete({
        sub: { name: subName },
        user: { user_id: this.userAuthHelpService.getUser() },
      });
    } catch (error) {
      return {
        path: 'leave subName',
        message: 'Error at leaving sub',
      };
    }
  }
  async getJoinSub() {
    try {
      const subJoin = await this.joinRepository.find({
        where: { user: { user_id: this.userAuthHelpService.getUser() } },
        relations: ['sub'],
      });
      return subJoin;
    } catch (error) {
      return null;
    }
  }
  async getUserJoinedSub(username: string) {
    try {
      const subJoin = await this.joinRepository
        .createQueryBuilder('subjoin')
        .leftJoin('subjoin.user', 'user')
        .leftJoin('subjoin.sub', 'sub')
        .where('user.username = :name', {
          name: username,
        })
        .select('sub.displayName', 'displayName')
        .addSelect('sub.name', 'name')
        .addSelect('sub.picture_url', 'picture_url')
        .execute();
      return subJoin;
    } catch (error) {
      return null;
    }
  }
  async getSub(subName: string) {
    try {
      const subs = await this.subCacheService.getSubs();

      if (subs) {
        const sub = subs.find(sub => sub.name === subName);
        return sub;
      }
      const sub = await this.subRepository.findOne(subName);
      return sub;
    } catch (error) {
      return null;
    }
  }
  async isJoin(subName: string): Promise<boolean> {
    const join = await this.joinRepository.findOne({
      where: {
        sub: { name: subName },
        user: { user_id: this.userAuthHelpService.getUser() },
      },
      relations: ['sub'],
    });
    if (join) {
      return true;
    }
    return false;
  }
  async getSubs(subInput: SubSearchInput) {
    try {
      const subs_cache = await this.subCacheService.getSubs();
      if (subs_cache) {
        return this.getSearchSubs({ subs: subs_cache, subInput });
      }
      const subs = await this.subRepository.find();
      this.subCacheService.setSubs(subs);
      return this.getSearchSubs({ subs, subInput });
    } catch (error) {}
  }
  private getSearchSubs({
    subs,
    subInput,
  }: {
    subs: SubEntity[];
    subInput: SubSearchInput;
  }) {
    if (subInput.search_value.length == 0) {
      return [];
    }
    let subs_filter = subs.filter(
      sub =>
        sub.name.includes(subInput.search_value) ||
        sub.displayName.includes(subInput.search_value),
    );
    if (subInput.limit) {
      subs_filter = subs_filter.slice(0, subInput.limit);
    }
    return subs_filter;
  }
}
