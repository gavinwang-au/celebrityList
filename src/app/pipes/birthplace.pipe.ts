import { PipeTransform, Pipe } from '@angular/core';
import { CelebrityModel } from '../models/celebrity-model';
@Pipe({
  name: 'birthPlaceFilter'
})

export class BirthPlaceFilterPipe implements PipeTransform {

  transform(items: CelebrityModel[], birthPlaceFilter: string): CelebrityModel[] {
    if (!Array.isArray(items) || !birthPlaceFilter) {
      return items;
    }
    return items.filter((item: CelebrityModel) => this.applyFilter(item, birthPlaceFilter));
  }

  applyFilter(cele: CelebrityModel, birthPlaceFilter: string): boolean {

    if (birthPlaceFilter  === 'all') {
      return true;
    }
    if (cele.country !== birthPlaceFilter) {
      return false;
    }
    return true;
  }
}
