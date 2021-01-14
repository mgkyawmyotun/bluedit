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
import { IsAuthGuard } from 'src/shared/is-auth.guard';
import { ImageService } from './image.service';

@Controller()
export class ImageController {
  constructor(private imageService: ImageService) {}
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
  uploadFile(
    @UploadedFile()
    file,
  ) {
    return this.imageService.saveImage(file);
  }
  @Get('remove/:fileName')
  @UseGuards(IsAuthGuard)
  removeFile(@Param('fileName') fileName: string) {
    return this.imageService.removeImage(fileName);
  }
}
