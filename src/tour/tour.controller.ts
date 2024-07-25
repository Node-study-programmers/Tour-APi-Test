import { Controller, Get, Header, Res } from '@nestjs/common';
import { TourService } from './tour.service';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  async getTourData(){
    return await this.tourService.getTourData();
  }
}
