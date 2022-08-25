import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm'
import { Customer } from './Customer'

@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string
    
    @ManyToMany(type => Customer)
    @JoinTable({
        name: 'purchases',
        joinColumn: {
            name: 'products_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'customers_id',
            referencedColumnName: 'id'
        }
    })
    customers: Customer[]

    @CreateDateColumn()
    created_at: Date
}