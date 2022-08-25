import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm'
import { Customer } from './Customer'

@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @CreateDateColumn()
    created_at: Date
}