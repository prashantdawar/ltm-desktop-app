import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CustomerDetails } from '../../../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-update',
  templateUrl: './customer-details-update.component.html',
  styleUrls: ['./customer-details-update.component.css']
})



export class CustomerDetailsUpdateComponent implements OnInit {
  model: any = new CustomerDetails();

  breadcrumbItems: any[] = [];
  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService, private router: Router) { }


  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': this.model.getClassLabel(),
      'urlTo': '/customer-details'
    },
    {
      'label': 'Create Customer Details',
      'active': true
    }
    ];
    const routeParams = this.route.snapshot.paramMap;
    const customerId = Number(routeParams.get('customerId'));


    this.getFromIndexDB(customerId);
  }

  onChange(changes: any){
    console.log(changes);

    this.model = changes;
    this.updateModel();
  }

  getFromIndexDB(customerId: number) {
    this.dbService
      .getByKey('customer_details', customerId)
      .subscribe((customer) => {
        
        console.log(customer);
        this.model = Object.assign(new CustomerDetails(), customer);
        // this.updateColumns();
        // console.log(this.customer.attributeLabels());
      })
  }

  updateModel(){
    // this.dbService
    // .update('customer_details', this.model)   
    // .subscribe((key) => {
    //   console.log('key: ', key);
    //   // form.reset(); // only working in template-driven form for fixed template.
    //   this.model = null;
    //   this.model = new CustomerDetails();
    // });




    this.model.save(this.dbService)
    
    
    .subscribe((key: any) => {
      this.router.navigate(['../../view', this.model.customer_id], { relativeTo: this.route });
    

      this.model = null;
      this.model = new CustomerDetails();
      console.log('key:');
      console.log(key);

      
    })
  }
}