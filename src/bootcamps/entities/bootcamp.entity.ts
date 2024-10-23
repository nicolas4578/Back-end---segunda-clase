import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { length: 20 })
    phone: string;

    @Column('varchar', { length: 100 })
    address: string;

    @Column('double', { default: 0 })
    averageRating: number;

    @Column('date', { default: () => 'CURRENT_DATE' })
    createdAt: Date;
}


