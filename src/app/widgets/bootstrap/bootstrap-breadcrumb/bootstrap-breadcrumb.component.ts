import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bootstrap-breadcrumb',
  templateUrl: './bootstrap-breadcrumb.component.html',
  styleUrls: ['./bootstrap-breadcrumb.component.css']
})



export class BootstrapBreadcrumbComponent implements OnInit {
  @Input() breadcrumbItems: any [] = [];
  constructor() { }

  ngOnInit(): void {
    // console.log(this.breadcrumbItems);
  }

}
