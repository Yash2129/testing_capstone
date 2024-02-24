import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  itemForm: FormGroup;
  formModel: any = { role: null, email: '', password: '', username: '' };
  showMessage: boolean = false;

  responseMessage: any;
  constructor(public router: Router, private bookService: HttpService, private formBuilder: FormBuilder) {

    this.itemForm = this.formBuilder.group({
      //complete this function 
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }


  onRegister() {
    
    if (this.itemForm.invalid) {
      this.showMessage = true;
      this.responseMessage = 'Please fill all the required fields correctly.';
      return;
    }

    // Call the service to register the user
    this.bookService.registerUser(this.itemForm.value).subscribe(
      (response: any) => {
        this.showMessage = true;
        this.responseMessage = response.message || 'Registration successful.';
      },
      (error: any) => {
        this.showMessage = true;
        this.responseMessage = error.message || 'An error occurred while registering.';
      }
    );
  }


}
