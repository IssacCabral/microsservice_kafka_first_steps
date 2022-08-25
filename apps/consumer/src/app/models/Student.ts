import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable, Table} from 'typeorm'
import { Course } from './Course'

@Entity('students')
export class Student{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @ManyToMany(type => Course)
    @JoinTable({
        name: 'enrollments',
        joinColumn: {
            name: 'students_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'courses_id',
            referencedColumnName: 'id'
        }
    })
    courses: Course[]

    @CreateDateColumn()
    created_at: Date
}