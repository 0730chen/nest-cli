import {Controller,Get,Req} from "@nestjs/common";
import {Request} from "express";

//定义请求参数
@Controller('dogs')
export  class DogController{
    //定义Get请求
    @Get()
    findAll(){
        return 'this is dog'
    }
    @Get('/jinmao')
    findOne(@Req() request: Request): string {
        console.log(request)
        return '这是一个金毛';
    }
}