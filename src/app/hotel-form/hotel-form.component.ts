import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HotelService} from '../hotel.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  // sử dựng Form group để đưa dữ liệu vào.
  hotelForm= new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
  });
  // có 3 cái DI
  constructor(
    private hotelService: HotelService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let hotelId = params.get('id');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        this.hotelForm.setValue(data);
      })
    })
  }

}