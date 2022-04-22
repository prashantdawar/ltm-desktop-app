import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileDetails } from 'src/app/modals_data/profile_details';

@Component({
  selector: 'app-profile-details-form',
  templateUrl: './profile-details-form.component.html',
  styleUrls: ['./profile-details-form.component.css']
})

export class ProfileDetailsFormComponent implements OnInit {
 
  
  @Input() model: ProfileDetails = new ProfileDetails();
  @Output() modelChange = new EventEmitter<ProfileDetails>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log('submit');
    console.log("form value");
    console.log(form);
    const data = form.value;
    this.model.beforeSave();
    if (form.status == "VALID") {
      this.modelChange.emit(this.model);
      console.log("Event emitted");
    } else {

      console.log("Fill Fields");
    }
  }
}
