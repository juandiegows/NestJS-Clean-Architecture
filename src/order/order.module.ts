import { DynamicModule, Module } from '@nestjs/common';
import { OrderService } from './application/order.service';
import { OrderController } from './presenters/order.controller';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {
  static withInfrasctructure(infraModule: DynamicModule): DynamicModule {
    return {
      module: OrderModule,
      imports: [infraModule],
    };
  }
}
