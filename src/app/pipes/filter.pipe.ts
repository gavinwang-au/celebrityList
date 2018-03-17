import { Pipe, PipeTransform } from '@angular/core';
import {CelebrityModel} from '../models/celebrity-model';

@Pipe({
  name: 'textFilter'
})
export class FilterPipe implements PipeTransform {
  transform(celebrities: CelebrityModel[], searchText) {
    if (searchText && Array.isArray(celebrities)) {
      return celebrities.filter(cele => {
        for (const property in cele ) {
          if ((cele[property].toString()).toLowerCase().includes(searchText.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
    return celebrities;
  }
}
