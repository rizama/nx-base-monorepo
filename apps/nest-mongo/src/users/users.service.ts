import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './users.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOne({ userId });
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find({});
    }

    async createUser(name: string, email: string, age: number): Promise<User> {
        return this.userRepository.create({
            userId: uuidv4(),
            name,
            email,
            age,
            favoriteFoods: [],
        });
    }

    async updateUser(userId: string, userUpdate: UpdateUserDto): Promise<User> {
        return this.userRepository.findOneAndUpdate({ userId }, userUpdate);
    }
}
