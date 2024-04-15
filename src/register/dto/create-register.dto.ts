import { IsNotEmpty, IsString } from "class-validator"

export class CreateRegisterDto {

    @IsString()
    @IsNotEmpty()    
    userName: string
    
    @IsString()
    @IsNotEmpty()    
    email: string
    
    @IsString()
    @IsNotEmpty()    
    password: number

}
