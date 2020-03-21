import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { ConvertGenderPipe } from './convert-gender.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HospitalListComponent, ConvertGenderPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
