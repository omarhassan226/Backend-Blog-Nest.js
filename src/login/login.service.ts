import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('registerSchema') private userModel, 
  ) {}

  async create(createLoginDto: CreateLoginDto) {
    const { email, password } = createLoginDto;

    console.log(email, password);
    
    const user = await this.userModel.findOne({ email }).exec();

    if (! user) { 
      
      throw new Error('Invalid Email or Password');
    }

    if(+user.password !== +password){ 
      
      throw new Error('Invalid Email or Password');
    }


    const accessToken = this.generateAccessToken(user.email); 
    return (
      {user, accessToken }
    ) 
  }
  // console.log(accessToken);
  

  private generateAccessToken(email: string) {
    const payload = { email };
    return this.jwtService.sign(payload);
  }
  
}
