import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { unique: true, length: 100 })
    email: string;

    @Column('varchar', { length: 20 })
    role: string;

    @Column('varchar', { length: 100 })
    password: string;
}
