import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; // Import Model type from mongoose

@Injectable()
export class RegisterService {
  constructor(@InjectModel('registerSchema') public readonly registerModel: Model<any>) {}

  async create(createRegisterDto: CreateRegisterDto) {
    const createdUser = new this.registerModel(createRegisterDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.registerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.registerModel.findById(id).exec();
  }

  async update(id: string, updateRegisterDto: UpdateRegisterDto) {
    return await this.registerModel.findByIdAndUpdate(id, updateRegisterDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.registerModel.findByIdAndDelete(id).exec();
  }
}
