import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';

@Module({
  imports: [HttpModule],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
