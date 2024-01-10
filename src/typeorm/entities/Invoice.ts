import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, 
    ManyToOne, UpdateDateColumn, OneToMany } from "typeorm";
// import { Warehouse } from "./Warehouse";
import { Product } from "./Product";
import { User } from "./User";
import { Bill } from "./Bill";


@Entity({ name: 'invoice' })
export class Invoice{

    @PrimaryGeneratedColumn()
    id: number;

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

    
    @ManyToOne(() => User, (user) => user.invoice,{ 
        onDelete: 'CASCADE' 
      }) 
    @JoinColumn({
        name: "id_user",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_i_user_id"
    })     
    user: User;

    @OneToMany(type => Bill, bill => bill.invoice)
    bill: Bill[];
    

           
    
}