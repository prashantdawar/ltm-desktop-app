import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CouponDetails } from '../../../modals_data/coupon_details';

@Component({
  selector: 'app-coupon-details-index',
  templateUrl: './coupon-details-index.component.html',
  styleUrls: ['./coupon-details-index.component.css']
})

export class CouponDetailsIndexComponent implements OnInit {
  models: CouponDetails[] = [];
  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.getFromIndexDB();
  }


  getFromIndexDB(){
    this.dbService
    .getAll('coupon_details')

    .subscribe((kpis) => {
      kpis.forEach((kp) => {
        this.models.push(Object.assign(new CouponDetails(), kp));
      });
    });
  }
}
