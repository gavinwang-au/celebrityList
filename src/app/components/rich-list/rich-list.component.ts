import { Component, OnInit } from '@angular/core';
import { RichListService } from '../../services/rich-list.service';
import { SelectType } from './rich-list.component.selectType';
import { CelebrityModel } from '../../models/celebrity-model';
import {InfoModel} from '../../models/info-model';

@Component({
  selector: 'app-rich-list',
  templateUrl: './rich-list.component.html',
  styleUrls: ['./rich-list.component.css']
})
export class RichListComponent implements OnInit {

  currencyList: SelectType[] =  [];
  orderList: SelectType[] = [];

  birthPlaceList: SelectType[];
  celebrities: CelebrityModel[];
  info: InfoModel;

  selectedCurrency: string;
  selectedRate: string;
  selectedOrder: string;
  selectedBirthPlace: string;
  searchText: string;

  constructor(private richListService:  RichListService ) {

  }

  ngOnInit() {
    this.selectedRate = '1';
    this.selectedOrder = 'rank';
    this.selectedBirthPlace = 'all';
    this.selectedCurrency = 'USD';

    this.orderList = [
      new SelectType('rank', 'Rank' ),
      new SelectType('name', 'Name' ),
      new SelectType('age', 'Age' )
    ];

    this.info = new InfoModel();

    this.richListService.getInfo().subscribe(
      (info: InfoModel ) => {
        this.info = info;
        this.currencyList = [];
        this.currencyList.push(new SelectType(info.usDollarValue, 'US Dollar' ));
        this.currencyList.push(new SelectType(info.australianDollarValue, 'AU Dollar' ));
        this.currencyList.push(new SelectType(info.euroValue, 'EURO Dollar' ));
      });

    this.richListService.getRichList().subscribe(
      (celebrities: CelebrityModel[]) => {
        this.celebrities = celebrities;
        const filteredCeles = this.celebrities.map(cele => cele.country)
          .filter((value, index, self) => self.indexOf(value) === index);

        this.birthPlaceList = filteredCeles.map((item) => {
          return new SelectType(item, item );
        });

        this.birthPlaceList.unshift(new SelectType('all', 'Show All' ));
      });
  }

  onChangeCurrency($event) {
     const rate = $event.target.value;
     if ( this.info.australianDollarValue === rate) {
       this.selectedCurrency = 'AUD';
     } else if (this.info.usDollarValue === rate) {
       this.selectedCurrency = 'USD';
     } else if (this.info.euroValue === rate ) {
       this.selectedCurrency = 'EUR';
     }
  }

}
