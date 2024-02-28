import { Module } from '@nestjs/common';
import { DepotsService } from './depots.service';
import { DepotsController } from './depots.controller';

@Module({
  providers: [DepotsService],
  controllers: [DepotsController]
})
export class DepotsModule {}
