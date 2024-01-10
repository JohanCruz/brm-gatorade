import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './typeorm/entities/Warehouse';
import { WarehousesModule } from './warehouses/warehouse.module';
import { User } from './typeorm/entities/User';
import { Product } from './typeorm/entities/Product';
import { Inventory } from './typeorm/entities/Inventory';
import { Record } from './typeorm/entities/Record';
import { Bill } from './typeorm/entities/Bill';
import { Invoice } from './typeorm/entities/Invoice';
import { ConfigModule } from '@nestjs/config';

require('dotenv').config()


@Module({
  imports: [
    ConfigModule.forRoot(),    
    TypeOrmModule.forRoot({      
      type: 'mysql',
      host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
      port: process.env.DB_PORT? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USER? process.env.DB_USER: 'root',
      password: process.env.DB_PASSWORD? process.env.DB_PASSWORD : '',
      database: process.env.DB_NAME ? process.env.DB_NAME :'inventory',
      entities: [Warehouse, User, Product, Inventory, Record, Bill, Invoice],
      synchronize: true,
    }),
    WarehousesModule,
  ],
})
export class AppModule {}
