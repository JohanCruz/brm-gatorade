import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, UpdateDateColumn, OneToMany  } from "typeorm";
import { User } from "./User";
import { Inventory } from "./Inventory";

@Entity({ name: 'warehouses' })
export class Warehouse{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ubication: string;
    
    @Column()
    description: string;

    @Column()
    created_by: number;

    @UpdateDateColumn()
    updated_by: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @ManyToOne( () => User, (user)=> user.warehouses,
    {eager: true, cascade: true, onDelete: 'CASCADE'})
    @JoinColumn({
        name: "id_responsable",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_user_id"
    })   
    user: User;

    @OneToMany(type => Inventory, inventory => inventory.warehouse)
    inventory: Inventory[];
    
}