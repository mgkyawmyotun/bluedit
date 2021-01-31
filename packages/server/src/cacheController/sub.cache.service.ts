import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { SubEntity } from './../subbluedit/subluedit.entity';
import { KEYS } from './cacheKeys';
@Injectable()
export class SubCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  public setSubs(subs: SubEntity[]): void {
    this.cacheManager.set(KEYS.SUBS, subs, { ttl: 60 * 60 * 24 });
  }
  public getSubs(): Promise<SubEntity[]> {
    return this.cacheManager.get<SubEntity[]>(KEYS.SUBS);
  }
  public updateSubs(subs: SubEntity[]): void {
    this.setSubs(subs);
  }
  public deleteSubs() {
    return this.cacheManager.del(KEYS.SUBS);
  }
  public async updateSub(sub: SubEntity) {
    const subs = await this.getSubs();
    const index = subs.findIndex(sub => sub.name == sub.name);
    subs[index] = sub;
    this.updateSubs(subs);
  }
}
