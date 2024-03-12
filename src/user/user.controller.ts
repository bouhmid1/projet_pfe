import { Body, Controller, Delete, Get, Param, Post, Put,ParseIntPipe,ValidationPipe} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from '../../models/user.js';
import { CreateUserDto } from 'src/auth/auth.dto';
import { UpdateUserDto } from 'src/auth/auth.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) CreateUserDto: User): User {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id:number):User{
    return this.usersService.getUserById(id)
  }

  @Delete(":id")
  remove(@Param('id',ParseIntPipe) id:number):User{
    return this.usersService.deleteUserById(id)
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id:number , @Body(ValidationPipe) UpdateUserDto:Partial<User>):User{
    return this.usersService.updateUserById(id,UpdateUserDto)
  }
}
