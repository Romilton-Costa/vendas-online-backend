import { Body, Controller, Get, Post } from '@nestjs/common';
import {  CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';
// Controller: é a camada responsável pelas rotas, respostas e requisições;
@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}
    @Post()
    async createUser(
        @Body() createUser : CreateUserDto
    ):Promise<UserEntity>{
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser():Promise<UserEntity[]>{
        return this.userService.getAllUser();
    }
}
