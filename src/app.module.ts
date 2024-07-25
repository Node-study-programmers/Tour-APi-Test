import { Module } from '@nestjs/common';
import { TourModule } from './tour/tour.module';

@Module({
  imports: [TourModule],
})
export class AppModule {}
