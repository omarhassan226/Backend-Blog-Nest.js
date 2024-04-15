import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postsSchema } from './posts.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MongooseModule.forFeature([{ name: "postsContent", schema: postsSchema }])
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
