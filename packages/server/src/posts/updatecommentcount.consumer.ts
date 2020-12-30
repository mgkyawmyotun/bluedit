import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Connection, Repository } from 'typeorm';
import { CommentEntity } from './../comments/comments.entity';
import { PostEntity } from './posts.entity';
export const update_c_c = 'updateCommentCount';
export interface UpdateCommentCountInterface {
  post_id?: string;
  TYPE: 'DELETE' | 'ADD';
  comment_id?: string;
}
@Processor(update_c_c)
export class UpdateCommentConsumer {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private connection: Connection,
  ) {}
  @Process()
  async updateCommentCount(job: Job<UpdateCommentCountInterface>) {
    const { comment_id, TYPE, post_id } = job.data;
    const commentRepository = this.connection.getRepository(CommentEntity);
    let main_post_id: string = post_id;
    console.log(job.data);
    if (comment_id) {
      console.log('Here');
      try {
        console.log(comment_id);
        const comment = await commentRepository.findOne({
          comment_id: comment_id,
        });
        console.log(comment);
        if (comment) {
          main_post_id = comment.post.post_id;
        }
      } catch (error) {
        console.log(error);
      }
    }

    await this.postRepository.update(
      { post_id: main_post_id },
      {
        comment_count: () =>
          TYPE == 'ADD' ? 'comment_count + 1' : 'comment_count - 1',
      },
    );
  }
}
