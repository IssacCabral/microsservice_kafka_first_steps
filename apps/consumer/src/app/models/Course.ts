import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity('courses')
export class Course{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @CreateDateColumn()
    created_at: Date
}