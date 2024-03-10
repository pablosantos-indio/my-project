import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TxtWriteModule } from './txt-write/txt-write.module';

@Module({
  imports: [TxtWriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
