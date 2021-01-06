import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
    const path = join(
      __dirname,
      '..',
      'images',
      `${Date.now() + Math.random() + '' + file.originalname}`,
    );
    writeFile(path, file.buffer, () => {});
  }
}
