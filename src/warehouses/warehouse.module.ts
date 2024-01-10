import { Module } from '@nestjs/common';
import { WarehousesController } from './controllers/warehouses/warehouses.controller';
import { WarehousesService } from './service/warehouses/warehouses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from 'src/typeorm/entities/Warehouse';
import { User } from 'src/typeorm/entities/User';
import { Product } from 'src/typeorm/entities/Product';
import { Inventory } from 'src/typeorm/entities/Inventory';
import { Record } from 'src/typeorm/entities/Record';
import { Bill } from 'src/typeorm/entities/Bill';
import { Invoice } from 'src/typeorm/entities/Invoice';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse, User, Product, Inventory, Record, Bill,
  Invoice])],
  controllers: [WarehousesController],
  providers: [WarehousesService]
})
export class WarehousesModule {}
