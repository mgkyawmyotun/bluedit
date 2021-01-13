import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { unlinkSync, writeFile } from 'fs';
import { join } from 'path';
import { IsAuthGuard } from 'src/shared/is-auth.guard';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  @UseGuards(IsAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 5e6 },
      fileFilter: (_, file, callback) => {
        if (file.originalname.match(/\.(jpg)$|\.(png)$|\.(jpeg)$/)) {
          callback(null, true);
          return;
        }
        callback(null, false);
      },
    }),
  )
  uploadFile(@UploadedFile() file) {
    if (!file) {
      return null;
    }
    const fileName = `${Date.now() + Math.random() + '' + file.originalname}`;
    try {
      const path = join(__dirname, '..', 'images', fileName);
      writeFile(path, file.buffer, () => {});
    } catch (error) {
      return {
        status: 'Error',
      };
    }
    return { fileName };
  }
  @Get('remove/:fileName')
  @UseGuards(IsAuthGuard)
  removeFile(@Param('fileName') fileName: string) {
    try {
      const path = join(__dirname, '..', 'images', fileName);
      unlinkSync(path);
    } catch (error) {
      return {
        status: 'Error,Cannot Delete',
      };
    }
    return { status: 'Completed' };
  }
}
