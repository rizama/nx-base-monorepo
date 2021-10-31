import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateuserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/user.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get('/:id')
    async getUser(@Param('id') id: number): Promise<User> {
        return this.usersService.getOneById(id);
    }

    @Post()
    async storeUser(@Body() createUserDto: CreateuserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }

    @Patch('/:id')
    async updateUser(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        const { name } = updateUserDto;
        return this.usersService.updateUser(name, id);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: number): Promise<User> {
        return this.usersService.deleteUser(id);
    }
}
