import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.scss']
})
export class ScheduleMaintenanceComponent implements OnInit {
  itemForm: FormGroup;

  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  hospitalList:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  equipmentList: any=[];
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm =init form here


}  ngOnInit(): void {


  }
  dateValidator(control: AbstractControl): ValidationErrors | null {
  //  complete this function
  }
  getHospital() {
    //  complete this function
  }

  onSubmit()
  {
    //  complete this function
  }
  onHospitalSelect($event: any) {
   let id= $event.target.value
     //  complete this function
}
}

