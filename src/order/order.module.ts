import { Module } from '@nestjs/common';
import { OrderService } from './application/order.service';
import { OrderController } from './infrastructure/interface-adapters/order.controller';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
