import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent implements OnInit {

   constructor(private route: ActivatedRoute) { }
  detailId: number = 0;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.detailId = Number(params.get('hospitalId'));
    });
  }

}