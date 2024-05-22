import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class projects {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image: string
    
    @Column()
    description: string

    @Column('simple-array')
    technologies: string[]
}