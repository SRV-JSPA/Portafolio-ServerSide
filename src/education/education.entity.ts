import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class education {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string

    @Column()
    grade: string

    @Column()
    institution: string

    @Column()
    description: string
}