import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RichListComponent } from './components/rich-list/rich-list.component';
import { RichListService } from './services/rich-list.service';
import { FilterPipe } from './pipes/filter.pipe';
import { BirthPlaceFilterPipe } from './pipes/birthplace.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { CurrConvertPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RichListComponent,
    FilterPipe,
    BirthPlaceFilterPipe,
    OrderByPipe,
    CurrConvertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RichListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
