import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  hotel={
    id: null,
    name: "",
    logo: "",
    address: "",
    country: ""
  }
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
        this.hotel = data;
      })
    })
  }

}