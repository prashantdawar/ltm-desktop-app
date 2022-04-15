import { Component, Input, OnInit } from '@angular/core';
import { DetailView } from 'src/app/modals_core/DetailView';

@Component({
  selector: 'ngx-bootstrap-detailview',
  templateUrl: './bootstrap-detailview.component.html',
  styleUrls: ['./bootstrap-detailview.component.css']
})


export class BootstrapDetailviewComponent implements OnInit {

  detailViewColumns: DetailView[] = [];

  @Input() columns: any;
  @Input() model: any;


  constructor() { }




  ngOnInit(): void {
    // console.log(this.columns);
    // console.log(this.model);   
  }

  updateDetailView(){
    this.columns.forEach((element: string | DetailView) => {
      console.log(element);

      switch(typeof element){        
        case 'string': {
          this.detailViewColumns.push({
            columnHeader: this.model.attributeLabels()[element],
            columnValue: () => this.model[element]
          });         
        }
        break;
        case 'object':{
          this.detailViewColumns.push(element);
        }
      }

    });
    
  }

  ngOnChanges(changes: any){
    console.log(changes);
    if(this.model != undefined) this.updateDetailView();
  }

}
