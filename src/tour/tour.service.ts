import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class TourService {
  constructor(private readonly httpService: HttpService) {}

  async getTourData(): Promise<any> {
    const url = 'http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=4qAsXp8XRxSLrU08TFz6Qp9ah%2Fj4Qj4C5cnGS0Op%2BWSBEN2WpdIZ1jnWxTtNCUhlwy0GYGg5vIy0KnuHscZtJQ%3D%3D&listYN=Y&arrange=A&contentTypeId=12&areaCode=1&sigunguCode=9&cat1=&cat2=&cat3=&_type=json';

    return this.httpService.get(url).pipe(
      map(response => {
        const items = response.data.response.body.items.item;
        return items.map(item => ({
          title: item.title,
          address: `${item.addr1} ${item.addr2}`,
          areaCode: item.areacode,
          bookTour: item.booktour,
          category1: item.cat1,
          category2: item.cat2,
          category3: item.cat3,
          contentId: item.contentid,
          contentTypeId: item.contenttypeid,
          createdTime: item.createdtime,
          copyrightDivisionCode: item.cpyrhtDivCd,
          mapx: item.mapx,
          mapy: item.mapy,
          image: item.firstimage || item.firstimage2 || '',
          mapLevel: item.mlevel,
          modifiedTime: item.modifiedtime,
          sigunguCode: item.sigungucode,
          telephone: item.tel,
          zipcode: item.zipcode,
        }));
      })
    ).toPromise();
  }
}
