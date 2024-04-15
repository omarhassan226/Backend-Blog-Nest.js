import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { postsSchema } from './posts.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PostsService {
  constructor (@InjectModel("postsContent") private postsContent){}
  async create(createPostDto: CreatePostDto) {

    const newPost = new this.postsContent({
      ...createPostDto,
    });

    return await newPost.save();
  }

  findAll() {
    return this.postsContent.find();
  }

  findOne(id: string) {
    const selectedPost = this.postsContent.findById(id)
    return selectedPost
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const updatedPost = this.postsContent.findByIdAndUpdate(id, updatePostDto ,{new : true})
    return updatedPost
  }

  remove(id: string) {
    const deletedPost = this.postsContent.findByIdAndDelete(id)
    return deletedPost
  }
}
