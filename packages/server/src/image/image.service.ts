import { Injectable } from '@nestjs/common';
import { unlinkSync, writeFile } from 'fs';
import { join } from 'path';
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
  constructor() {}
  saveImage(file: FileType) {
    if (!file) {
      return null;
    }
    const fileName = `${Date.now() + Math.random() + '' + file.originalname}`;
    try {
      const path = join(__dirname, '..', '..', 'images', fileName);
      writeFile(path, file.buffer, err => {
        console.log(err);
      });
    } catch (error) {
      return {
        status: 'Error',
      };
    }
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
