import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    title: string;

    @Column('text')
    comment: string;

    @Column('double')
    rating: number;
}
