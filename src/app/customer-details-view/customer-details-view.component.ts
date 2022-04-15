import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DetailView } from '../modals_core/DetailView';
import { CustomerDetails } from '../modals_data/customer_details';

@Component({
  selector: 'app-customer-details-view',



  templateUrl: './customer-details-view.component.html',
  styleUrls: ['./customer-details-view.component.css']
})

export class CustomerDetailsViewComponent implements OnInit {
  breadcrumbItems: any[] = [];


  customer!: CustomerDetails;
  columns: (string | DetailView)[] = [];

  constructor(private route: ActivatedRoute, private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.breadcrumbItems = [{
      'label': 'Home',
      'urlTo': '',
    },
    {
      'label': (new CustomerDetails()).getClassLabel(),
      'urlTo': '/customer-details',

      'active': true
    },
    {
      'label': (new CustomerDetails()).getClassLabel(),
      'active': true
    }
    ];

    const routeParams = this.route.snapshot.paramMap;
    const customerId = Number(routeParams.get('customerId'));


    this.getFromIndexDB(customerId);
  }

  getFromIndexDB(customerId: number) {
    this.dbService
      .getByKey('customer_details', customerId)
      .subscribe((customer) => {
        
        console.log(customer);
        this.customer = Object.assign(new CustomerDetails(), customer);
        this.updateColumns();
        // console.log(this.customer.attributeLabels());
      })
  }

  updateColumns() {
    this.columns = [
      'customer_name',
      'customer_company_name',

      'customer_contact',
      'customer_phone_number',
      'customer_whatsapp_number',
      'customer_email',
      'customer_gst_number',
      {
        columnHeader: this.customer.attributeLabels()['customer_status_enable'],
        
        columnValue: function(this: any){



          let value = 't';
          console.log(this.customer);
          
          this.customer.STATUS_ENABLE_OBJ.forEach((statusArray: any) => {
            if(statusArray[0] == this.customer.customer_status_enable) value = statusArray[1];
          });
            
          

          return value;
          // this.customer.STATUS_ENABLE_OBJ[]
        }.bind(this)
      },
      'customer_code',
      'customer_notes',
      'customer_notes_internal'
    ];
  }
}
