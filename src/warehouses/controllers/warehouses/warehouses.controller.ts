import { Controller, Get, Post, Put,  Delete, Param, Body, Patch} from '@nestjs/common';
import { CreateWarehouseDto } from 'src/warehouses/dtos/createWarehouse.dto'; 
import { UpdateWarehouseDto } from 'src/warehouses/dtos/updateWarehouse.dto';
import { CreateProductDto } from 'src/warehouses/dtos/createProductDto';
import { CreateInventoryDto } from 'src/warehouses/dtos/createInventoryDto';
import { relocateProductDto } from 'src/warehouses/dtos/relocateProductDto';
import { WarehousesService } from 'src/warehouses/service/warehouses/warehouses.service';
import { CreateSeedersDto } from 'src/warehouses/dtos/createSeedersDto';
import { billInvoiceDto } from 'src/warehouses/dtos/billInvoiceDto';



@Controller('warehouses')
export class WarehousesController {

    constructor(private warehouseService: WarehousesService){}
    @Get()
    getAllStores() {
        return this.warehouseService.searchAll();
    }

    @Post('seeders')    
    createSeeders(@Body() createSeedersDto: CreateSeedersDto ){ 
        return this.warehouseService.createSeeders(createSeedersDto);
    }

    @Put('invoice')    
    billInvoice(@Body() createInvoice: billInvoiceDto ){ 
        return this.warehouseService.createInvoice(createInvoice);
    }

    
    @Get('invoices/user/:id')    
    SearchAllInvoices(
        @Param('id') id: number ){ 
        return this.warehouseService.searchAllInvoices(id);
    }



    @Delete('seeders')
    deleteSeeders(){ 
        return this.warehouseService.deleteSeeders();
    }

    @Post('products')
    createProduct(@Body() productDto: CreateProductDto){
        return this.warehouseService.createProduct(productDto);
    }

    @Delete('products/:id')
    async deleteProductById(
        @Param('id') id: number){
            await this.warehouseService.deleteProduct(id);
        }

    @Put('relocate/product')
    relocateProduct(@Body() relocateProductDto: relocateProductDto){
        return this.warehouseService.relocateProduct(relocateProductDto);
    }

    @Post('inventory')
    createInventor(@Body() inventoryDto: CreateInventoryDto){
        return this.warehouseService.createInventory(inventoryDto);
    }
    
    @Post()
    createStore(@Body() warehouseDto: CreateWarehouseDto){
        return this.warehouseService.createStore(warehouseDto);
    }

    @Put(':id')
    async updateStore(
        @Param('id') idStore: number, 
        @Body() warehouseDto: UpdateWarehouseDto
    ) {
        await this.warehouseService.updateStore(idStore, warehouseDto);
    }

    @Delete(':id')
    async deleteStoreById(
        @Param('id') id: number){
        await this.warehouseService.deleteStore(id);
    }

    @Get('products')
    async getAllProducts() {
        return this.warehouseService.searchAllProducts();
    }

    @Get(':id')
    async getStore(@Param('id') idStore: number) {          
        return this.warehouseService.SearchStore(idStore);
    }  
    
    

}
