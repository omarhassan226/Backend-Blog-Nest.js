import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
// import { ImageUploadModule } from './image-upload/image-upload.module';
// import { ImageUploadController } from './image-upload/image-upload.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://waleedAlmenawy:nf3VSmHh27xHStWa@iti.t3i9ucu.mongodb.net/reactNest"), PostsModule, RegisterModule, LoginModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
