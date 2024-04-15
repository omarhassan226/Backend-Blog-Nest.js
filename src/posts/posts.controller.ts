import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file, @Body() body) {
    const uploadDirectory = 'public';
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }
    const uniqueFilename = new Date().getTime() + '-' + file.originalname;
    fs.writeFileSync(path.join(uploadDirectory, uniqueFilename), file.buffer);
    console.log(uniqueFilename);

    const postBody = {
      title: body.title,
      content: body.content,
      image: uniqueFilename,
      userId: body.userId
    }

    console.log(postBody);

    this.postsService.create(postBody);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param('id') id: string, @UploadedFile() file, @Body() updatePostDto: UpdatePostDto) {
    if (file) {
      // If a new image is uploaded, save it and update the post's image field
      const uploadDirectory = '../public';
      if (!fs.existsSync(uploadDirectory)) {
        fs.mkdirSync(uploadDirectory, { recursive: true });
      }
      const uniqueFilename = new Date().getTime() + '-' + file.originalname;
      fs.writeFileSync(path.join(uploadDirectory, uniqueFilename), file.buffer);
      updatePostDto.image = uniqueFilename;
    }
    // Update the post's title and content if provided
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
