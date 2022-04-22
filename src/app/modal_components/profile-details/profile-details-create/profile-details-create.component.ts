import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ProfileDetails } from 'src/app/modals_data/profile_details';

@Component({
  selector: 'app-profile-details-create',
  templateUrl: './profile-details-create.component.html',
  styleUrls: ['./profile-details-create.component.css']
})
export class ProfileDetailsCreateComponent implements OnInit {
  model: any = new ProfileDetails();


  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'urlTo': '/profile-details'
    },
    {
      'label': 'Create Profile Details',
      'active': true
    }
    ];
  }

  onChange(changes: any){
    this.model = changes;

    this.saveModel();
  }

  saveModel(){
    this.model.save(this.dbService)
    .subscribe((key: any) => {
      this.model = null;
      this.model = new ProfileDetails();
      console.log('key:');
      console.log(key);
    })
  }

}
