import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn  } from "typeorm";
import { Warehouse } from "./Warehouse";
import { Bill } from "./Bill";
import { Invoice } from "./Invoice";

@Entity({ name: 'users' })
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    nombre: string;
    
    @Column({length: 200})
    foto: string;    

    @Column({ default: false })
    estado:  boolean = false;

    @Column({ default: false }) // false-> Cliente, true->Admin
    rol:  boolean = false;

    @Column()
    created_by: number;

    @Column()
    updated_by: number;

    @Column()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @OneToMany(() => Warehouse, (warehouse) => warehouse.user )
    warehouses: Warehouse[];

    @OneToMany(type => Invoice, invoice => invoice.user)
    invoice: Invoice[];

    @Column({length: 50})
    password: string;

    @Column({length: 50})
    token: string;

}