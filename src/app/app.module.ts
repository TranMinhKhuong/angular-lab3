
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {ConvertGenderPipe} from 
'./convert-gender.pipe'

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path:'',component: HotelsComponent}
    ])
  ],
  declarations: [ AppComponent,ConvertGenderPipe, HotelsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
