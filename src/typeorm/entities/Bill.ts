import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn } from "typeorm";
// import { Warehouse } from "./Warehouse";
import { Product } from "./Product";
import { User } from "./User";
import { Invoice } from "./Invoice";


@Entity({ name: 'bills' })
export class Bill{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "int"})
  cantidad: number;

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

  

  @ManyToOne(() => Product, (product) => product.bill,{ 
      onDelete: 'CASCADE' 
    }) 
  @JoinColumn({
      name: "id_product",
      referencedColumnName: "id",
      foreignKeyConstraintName: "fk_b_product_id"
  })     
  product: Product;  
  
  @ManyToOne(() => Invoice, (invoice) => invoice.bill,{ 
    onDelete: 'CASCADE' 
  }) 
  @JoinColumn({
      name: "id_invoice",
      referencedColumnName: "id",
      foreignKeyConstraintName: "fk_i_product_id"
  })     
  invoice: Invoice; 
    
}