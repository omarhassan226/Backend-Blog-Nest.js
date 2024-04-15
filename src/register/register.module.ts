import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { registerSchema } from './register.shcema';

@Module({
  imports : [MongooseModule.forFeature(([{name:"registerSchema",schema:registerSchema}]))],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
