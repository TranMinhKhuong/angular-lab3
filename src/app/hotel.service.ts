import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e79b50717314d0016133423.mockapi.io/hotels'; 
@Injectable()
export class HotelService {

  constructor(private http:HttpClient) { }

  // observalbe cho phép chờ cái th server bên kia trả về request cho mình để fill dữ liệu ra ngoài màn hình
  getHotels():Observable<any>{
    return this.http.get<any>(apiUrl);
  }
}