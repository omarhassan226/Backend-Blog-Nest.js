import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() createLoginDto: CreateLoginDto) {
    try {
      const accessToken = await this.loginService.create(createLoginDto);
      return { accessToken };
    } catch (error) {
      return { message: error.message };
    }
  }

//   @Get()
//   findAll() {
//     return this.loginService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.loginService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
//     return this.loginService.update(+id, updateLoginDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.loginService.remove(+id);
//   }
}
