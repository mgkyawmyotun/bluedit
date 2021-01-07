import { subCreateValidation } from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { shapeError, sqlError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { SubError, SubInput } from './subbluedit.types';
import { SubEntity } from './subluedit.entity';

@Injectable()
export class SubblueditService {
  constructor(
    @InjectRepository(SubEntity)
    private subRepository: Repository<SubEntity>,
    private userAuthHelpService: UserAuthHelpService,
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
          user: { user_id: this.userAuthHelpService.getUser() },
        })
        .execute();
    } catch (error) {
      return sqlError(error, 'subbluedit', 'name');
    }
  }
  async joinSub(subName: string) {
    const subEntity = await this.subRepository.findOne(subName);
    // subEntity.users.push({ user_id: this.userAuthHelpService.getUser() });
    await this.subRepository.save(subEntity);
  }
}
