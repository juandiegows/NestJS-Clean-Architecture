import { Order } from '../../domain/order.entity';
import { OrderRepositorySaveDTO } from '../dtos/order-repository-save.dto';

export interface IOrderRepository {
  getOrder(id: string): Promise<Order | null>;
  save(dto: OrderRepositorySaveDTO): Promise<void>;
}
