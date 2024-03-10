import { Module } from '@nestjs/common';
import { TxtWriteService } from './txt-write.service';
import { TxtWriteController } from './txt-write.controller';

@Module({
  providers: [TxtWriteService],
  controllers: [TxtWriteController]
})
export class TxtWriteModule {}
