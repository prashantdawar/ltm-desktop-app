import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProfileDetails } from 'src/app/modals_data/profile_details';
@Component({
  selector: 'app-profile-details-index',
  templateUrl: './profile-details-index.component.html',
  styleUrls: ['./profile-details-index.component.css']
})


export class ProfileDetailsIndexComponent implements OnInit {
  model: ProfileDetails = new ProfileDetails();
  constructor(private dbService: NgxIndexedDBService) { }

  models: ProfileDetails[] = [];
  breadcrumbItems: object[] = [];


  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'active': true
    }
    ];

    this.model
    .find(this.dbService)
    
    .subscribe((kpis) => {
      console.log(kpis);
      kpis.forEach((kp) => {
        this.models.push(Object.assign(new ProfileDetails(), kp));
      });

      console.log(this.models);
    });
  }
}