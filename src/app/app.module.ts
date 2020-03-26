
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {ConvertGenderPipe} from 
'./convert-gender.pipe'
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: HotelsComponent},
      {path:'detail/:hotelId',component: HotelDetailComponent},
      {path: 'add-hotel',component: HotelFormComponent},
      {path: 'edit-hotel/:id',component: HotelFormComponent}
    ])
  ],
  declarations: [ AppComponent,ConvertGenderPipe, HotelsComponent, HotelDetailComponent, HotelFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }
