import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get('/:userId')
    async getUser(@Param('userId') userId: string): Promise<User> {
        return await this.userService.getUserById(userId);
    }

    @Post()
    async createuser(@Body() createUserDto: UserCreateDto): Promise<User> {
        const { name, email, age } = createUserDto;
        return await this.userService.createUser(name, email, age);
    }

    @Patch('/:userId')
    async updateUser(
        @Param('userId') userId: string,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<User> {
        return await this.userService.updateUser(userId, updateUserDto);
    }
}
