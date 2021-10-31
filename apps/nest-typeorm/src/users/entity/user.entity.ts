import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Index('name-idx')
    @Column()
    name: string;

    @Column()
    email: string;
}