import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-requestequipment',
  templateUrl: './requestequipment.component.html',
  styleUrls: ['./requestequipment.component.scss']
})
export class RequestequipmentComponent implements OnInit {

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
      // this.itemForm = init this function



}  ngOnInit(): void {

  }
  getHospital() {
    //complete this function
  }
  dateValidator(control: AbstractControl): ValidationErrors | null {
     //complete this function
  }
  onSubmit()
  {
      //complete this function
  }
  onHospitalSelect($event: any) {
    let id= $event.target.value
      //complete this function
   
 }
}

