import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CouponDetails } from '../../modals_data/coupon_details';

@Component({
  selector: 'app-coupon-details-form',
  templateUrl: './coupon-details-form.component.html',
  styleUrls: ['./coupon-details-form.component.css']
})

export class CouponDetailsFormComponent implements OnInit {
model = new CouponDetails();
  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
  }


  onSubmit(form: any): void{
    const data = form.value;
    this.model.beforeSave();


    if(data.coupon_details_name){
      this.dbService
      .add('coupon_details', this.model)
      .subscribe((key) => {
        console.log('key: ', key);
        form.reset();
      });
    } else {

      console.log('Fill Fields');
    }
  }
}