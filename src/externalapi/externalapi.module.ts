import { Module } from '@nestjs/common';
import { ExternalapiService } from './externalapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  providers: [ExternalapiService],
})
export class ExternalapiModule {}
