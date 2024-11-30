import { Body, Controller, Get, Post } from '@nestjs/common';
import {  CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
// Controller: é a camada responsável pelas rotas, respostas e requisições;
@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}
    @Post()
    async createUser(
        @Body() createUser : CreateUserDto
    ):Promise<User>{
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser():Promise<User[]>{
        return this.userService.getAllUser();
    }
}
