import { PipeTransform, Pipe } from '@angular/core';
import { CelebrityModel } from '../models/celebrity-model';
import {RichListService} from '../services/rich-list.service';

@Pipe({name: 'currConvert'})
export class CurrConvertPipe implements PipeTransform {
  transform(celebrities: CelebrityModel[], currencyRate: string) {
    if (!Array.isArray(celebrities) || !currencyRate) {
      return celebrities;
    }

    return Array.from(celebrities).map(function (item) {
      const currRate = Number(currencyRate);
      item.convertedNetWorth = item.netWorth / currRate;
      return item;
    });

  }
}
