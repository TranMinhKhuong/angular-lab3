import { Component, OnInit } from '@angular/core';
import {Hospital} from '../hospital';
import {Doctor} from '../doctor';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals: Array<Hospital> = [
    new Hospital(1, 'Nhi Trung Ương', 'Đê La Thành, Hà Nội'),
    new Hospital(2, 'Phụ Sản Hà Nội', 'Đê La Thành, Hà Nội'),
    new Hospital(3, 'Chợ Rẫy', 'Quận 1, tp. Hồ Chí Minh'),
  ];

  doctors: Array<Doctor> = [
    new Doctor(1, 'Trần Hữu Thiện', 1, new Date('1991-02-03')),
    new Doctor(2, 'Trần Thị Loan', 2,  new Date('1980-11-20')),
    new Doctor(3, 'Đặng Quang Minh', 2,  new Date('1990-10-28')),
  ]
  constructor() { }

  ngOnInit() {
  }

}