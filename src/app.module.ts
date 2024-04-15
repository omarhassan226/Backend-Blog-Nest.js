import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { MulterModule } from '@nestjs/platform-express';
// import { ImageUploadModule } from './image-upload/image-upload.module';
// import { ImageUploadController } from './image-upload/image-upload.controller';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/nestReact"), PostsModule, RegisterModule, LoginModule, 
        MulterModule.register({
      dest: './uploads', // Destination folder where uploaded files will be stored
    }),
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
