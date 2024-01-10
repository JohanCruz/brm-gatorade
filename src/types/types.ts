export type createWarehouseParams = {
    ubication: string;
    description: string;
    id_responsable: number;
}

export type updateWarehouseParams = {
    ubication: string;
    description: string;
    id_responsable: number;
}

export type createProductParams = {
    nombre: string;
    descripcion: string;
    id_warehouse: number;
    cantidad: number;    
}

export type createInventorytParams = {
    cantidad: number;
    id_bodega: number;
    id_product: number;
}

export type relocateProductParams ={    
    cantidad: number;
    id_bodega_recibe: number;
    id_bodega_envia: number;
    id_producto: number;
}

export type createInvoiceParams = {
    readonly id_client: number;
    readonly id_productos: number[];
    readonly cantidades: number[];
}