import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive() 
    readonly price: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto){
    // readonly name?:string; //variablesopcionales con ?
    // readonly description?: string;
    // readonly price?: number;
    // readonly stock?: number;
    // readonly image?: string;
}