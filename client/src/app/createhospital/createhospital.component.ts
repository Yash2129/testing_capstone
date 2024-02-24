import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-createhospital',
  templateUrl: './createhospital.component.html',
  styleUrls: ['./createhospital.component.scss']
})
export class CreatehospitalComponent implements OnInit {
  itemForm: FormGroup;
  equipmentForm: FormGroup;
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  hospitalList:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm =//init this form

    this.equipmentForm = this.formBuilder.group({
      //init this form
  }
  ngOnInit(): void {

   
  }
  getHospital() {
  //complete this function
  }

 
  onSubmit()
  {
    //complete this function
  }
  Addequipment(value:any)
  {
    
    //complete this function
  }
  submitEquipment()
  {
     //complete this function
  }
  
}
