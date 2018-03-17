import {Pipe, PipeTransform} from '@angular/core';
import { CelebrityModel } from '../models/celebrity-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: CelebrityModel[], orderBy: string) {
    if (!Array.isArray(items) || !orderBy || orderBy.trim() === '') {
      return items;
    }
    return Array.from(items).sort((item1: any, item2: any) => {
        return this.orderByComparator(item1[orderBy], item2[orderBy]);
    });
  }

  orderByComparator(a, b): number {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
}
