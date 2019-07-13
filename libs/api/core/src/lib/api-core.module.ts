import { Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@beeman/api/database';

@Module({
  imports: [ApiDatabaseModule],
  exports: [ApiDatabaseModule],
})
export class ApiCoreModule {

}
