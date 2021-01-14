import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { unlinkSync, writeFile } from 'fs';
import { join } from 'path';
import { blur_i_m } from './../consumer/consumer.name';
type FileType = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
};
@Injectable()
export class ImageService {
  constructor(@InjectQueue(blur_i_m) private blurImageQueue: Queue) {}
  saveImage(file: FileType) {
    if (!file) {
      return null;
    }
    const fileName = `${Date.now() + Math.random() + '' + file.originalname}`;
    try {
      const path = join(__dirname, '..', '..', 'images', fileName);
      writeFile(path, file.buffer, err => {});
    } catch (error) {
      return {
        status: 'Error',
      };
    }
    this.blurImageQueue.add({ imageName: fileName });
    return { fileName };
  }
  removeImage(fileName: string) {
    try {
      const path = join(__dirname, '..', '..', 'images', fileName);
      unlinkSync(path);
    } catch (error) {
      return {
        status: 'Error,Cannot Delete',
      };
    }
    return { status: 'Completed' };
  }
}
