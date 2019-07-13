import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@beeman/api/core';
import { ApiUserModule } from '@beeman/api/user';


import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApiUserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
