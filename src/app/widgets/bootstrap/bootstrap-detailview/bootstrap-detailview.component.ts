import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bootstrap-detailview',
  templateUrl: './bootstrap-detailview.component.html',
  styleUrls: ['./bootstrap-detailview.component.css']
})



export class BootstrapDetailviewComponent implements OnInit {
  @Input() columns: any;
  @Input() model: any;

  constructor() { }



  ngOnInit(): void {
    // console.log(this.columns);
    // console.log(this.model);
  }

}
