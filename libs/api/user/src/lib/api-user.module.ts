import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@beeman/api/core';

@Module({
  imports: [ApiCoreModule],
})
export class ApiUserModule {

}
