import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import Jimp from 'jimp';
import { join } from 'path';
import { blur_i_m } from './consumer.name';
export interface BlurImageInterface {
  imagePath: string;
}
@Processor(blur_i_m)
export class BlurImageConsumer {
  constructor() {}
  @Process()
  async blurTheImage(job: Job<BlurImageInterface>) {
    const path = join(
      __dirname,
      '..',
      '..',
      'images',
      'blur',
      job.data.imagePath,
    );
    Jimp.read(job.data.imagePath)
      .then(lenna => {
        lenna
          .resize(250, 250)
          .quality(50)
          .blur(5)
          .write(path);
      })
      .catch(console.log);
  }
}
