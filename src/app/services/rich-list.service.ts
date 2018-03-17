import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CelebrityModel } from '../models/celebrity-model';
import {InfoModel} from '../models/info-model';

@Injectable()
export class RichListService {
  constructor(private http: Http) {
  }

  getRichList(): Observable<CelebrityModel[]> {
    return this.http.get('http://localhost:4200/assets/richList.json')
      .map(res => res.json().celebrityList)
      .catch((error: any) => {
          return Observable.throw(error);
      });
  }

  getInfo(): Observable<InfoModel> {
    return this.http.get('http://localhost:4200/assets/richList.json')
      .map((res) => {
        const info = new InfoModel();
        const resJson = res.json();
        info.pageTitleH1 = resJson.pageTitleH1;
        info.pageTitleH2 = resJson.pageTitleH2;
        info.description = resJson.description;
        info.referenceLink = resJson.referenceLink;
        info.australianDollarValue = resJson.australianDollarValue;
        info.euroValue = resJson.euroValue;
        info.usDollarValue =  resJson.usDollarValue;
        return info;
      })  .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  getCurrencyRate(currency: string): Observable<number> {
    return this.http.get('http://localhost:4200/assets/richList.json')
      .map((res) => {
        if ( currency === 'AUD') {
          return res.json().australianDollarValue;
        } else if ( currency === 'EURO' ) {
          return res.json().euroValue;
        } else {
          return res.json().usDollarValue;
        }
      })  .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}
