import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable, Table} from 'typeorm'
import { Product } from './Product'

@Entity('customers')
export class Customer{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @ManyToMany(type => Product)
    @JoinTable({
        name: 'purchases',
        joinColumn: {
            name: 'customers_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'products_id',
            referencedColumnName: 'id'
        }
    })
    products: Product[]

    @CreateDateColumn()
    created_at: Date
}