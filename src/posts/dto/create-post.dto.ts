import { IsNotEmpty, IsString } from "class-validator";
// import uploadImage from '../posts.controller'

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()    
    title: string
    
    @IsString()
    @IsNotEmpty()    
    content: string

    @IsString()
    image: string;
    
    userId :string
}
