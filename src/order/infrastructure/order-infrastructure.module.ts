import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryOrderPersistenceModule } from './persistence/in-memory/in-memory.module';
import { TypeormPersistenceModule } from './persistence/typeorm/typeorm.module';
import { BootstrapConfig } from '../../app.module';

@Module({})
export class OrderInfrastructureModule {
  static use(driver: BootstrapConfig['persistenceDriver']): DynamicModule {
    const persistenceModule =
      driver === 'in-memory'
        ? InMemoryOrderPersistenceModule
        : TypeormPersistenceModule;

    return {
      module: OrderInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
