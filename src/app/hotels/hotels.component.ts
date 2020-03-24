import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: HotelService) { }

  // tự động đc chạy 1 lần khi mình genarate
  ngOnInit() {
    this.hotelService.getHotels().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

}