import { Inject, Module, OnModuleDestroy } from '@nestjs/common';
import { databaseProviders } from './api-database.providers';
import { DB_CON_TOKEN } from './api-database.constants';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class ApiDatabaseModule implements OnModuleDestroy {
  constructor(@Inject(DB_CON_TOKEN) private readonly dbConnection) {}

  public onModuleDestroy(): void {
    this.dbConnection.close();
  }
}
