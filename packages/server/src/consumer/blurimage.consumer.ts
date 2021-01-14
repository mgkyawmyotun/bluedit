import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as Jimp from 'jimp/dist';
import { join } from 'path';
import { blur_i_m } from './consumer.name';
export interface BlurImageInterface {
  imageName: string;
}
@Processor(blur_i_m)
export class BlurImageConsumer {
  constructor() {}
  @Process()
  async blurTheImage(job: Job<BlurImageInterface>) {
    const dir__path = join(
      __dirname,
      '..',
      '..',
      'images',
      'blur',
      job.data.imageName,
    );
    const path = join(__dirname, '..', '..', 'images', job.data.imageName);
    try {
      const image = await Jimp.read(path);
      image
        .resize(250, 250)
        .quality(50)
        .blur(5)
        .write(dir__path, err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
}
