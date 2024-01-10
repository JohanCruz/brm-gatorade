import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { Warehouse } from "./Warehouse";
import { Product } from "./Product";
import { Inventory } from "./Inventory";


@Entity({ name: 'records' })
export class Record{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int", nullable: false})
    cantidad: number;

    @ManyToOne(type => Warehouse, { nullable: false })
    @JoinColumn({
        name: "id_bodega_destino",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_bodega_destino_id"
    })
    warehouse: Warehouse; 

    @ManyToOne(type => Warehouse, { nullable: false })
    @JoinColumn({
        name: "id_bodega_origen",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_bodega_origen_id"
    })
    wareh: Warehouse;

    @ManyToOne(type => Inventory, { nullable: false })
    @JoinColumn({
        name: "id_inventario",
        referencedColumnName: "id"
    })
    inventory: Inventory;

    @ManyToOne(type => Product, { nullable: false, onDelete: 'CASCADE'  })
    @JoinColumn({
        name: "id_product",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_product_record_id"
    })
    product: Product;

    @Column({ nullable: true })
    created_by: number;

    @Column()
    updated_by: number;

    @Column()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ nullable: true })
    deleted_at: Date;

}