import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { RegisterService } from '../register/register.service';
import { registerSchema } from './register.shcema';
import { RegisterController } from '../register/register.controller';


@Module({
  imports: [
MongooseModule.forFeature(([{ name: "registerSchema", schema: registerSchema }])),
    JwtModule.register({
      secret: 'your_secret_key', 
      signOptions: { expiresIn: '1h' }, 
    })],
  controllers: [LoginController , RegisterController],
  providers: [LoginService , RegisterService],
})
export class LoginModule {}
