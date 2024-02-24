import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  // itemForm: FormGroup;
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  hospitalList:any=[];
  assignModel: any={};
  itemForm: FormGroup;
  showMessage: any;
  responseMessage: any;
  maintenanceList: any=[];
  maintenanceObj: any={};
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm = //complete this function 



}  
ngOnInit(): void {
  this.getMaintenance();
  }  
  dateValidator(control: AbstractControl): ValidationErrors | null {
    //complete this function
  }
  getMaintenance() {
  //complete this function
  }
  viewDetails(details:any)
  {
    //complete this function
  }
  edit(val:any)
  {
   //complete this function
  update()
  {
    //complete this function
  }
}

