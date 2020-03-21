import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { ConvertGenderPipe } from './convert-gender.pipe';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HospitalListComponent},
      {path: 'hospital-detail', component: HospitalDetailComponent},
      {path: 'add-hospital', component: HospitalFormComponent},
      {path: 'edit-hospital/:hospitalId', component: HospitalFormComponent}
    ])
  ],
  declarations: [ AppComponent, HospitalListComponent, ConvertGenderPipe, HospitalDetailComponent, HospitalFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
