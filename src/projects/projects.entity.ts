import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class projects {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    description: string

    @Column('simple-array')
    technologies: string[]
}