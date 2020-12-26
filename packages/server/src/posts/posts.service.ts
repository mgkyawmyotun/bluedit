import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { UserAuthHelpService } from './../shared/userauth.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private userAuthHelpService: UserAuthHelpService,
  ) {}

  public async getPosts() {
    this.userAuthHelpService.getUser();
    const posts = await this.postRepository.find({ relations: ['sub'] });
    return posts;
  }
}
