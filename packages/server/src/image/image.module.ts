import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { blur_i_m } from './../consumer/consumer.name';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: blur_i_m,
    }),
  ],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
