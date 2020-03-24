
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {ConvertGenderPipe} from 
'./convert-gender.pipe'
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'',component: HotelsComponent},
      {path:'detail/:hotelId',component: HotelDetailComponent}
    ])
  ],
  declarations: [ AppComponent,ConvertGenderPipe, HotelsComponent, HotelDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }
