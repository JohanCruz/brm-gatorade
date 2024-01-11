export class CreateProductDto{    
    readonly nombre: string;
    readonly descripcion: string;
    readonly cantidad: number;
    readonly id_warehouse: number;
    readonly  lot_number: number; 
    readonly  price: number;
}