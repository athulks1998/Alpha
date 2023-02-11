import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private toast: MessageService) { }

  ngOnInit(): void {
  }

  isImageRotated: boolean = false;

  validPassword: boolean = true;
  validUsername: boolean = true;

  username: string = ""
  password: string = ""

  isLoading: boolean = false;

  isFormTouched : boolean = false;

  showPasswordValidationDetails : boolean = false ;
  
  rotateImage = () => {
    this.isImageRotated = !this.isImageRotated;
  }

  routeToHomePage = () => {
    // To Do : Validation 
    this.isFormTouched= true;
    this.isLoading = true;
    this.rotateImage();

    setTimeout(() => {
      this.isImageRotated = false

      this.isLoading = false;
      if (this.validatePasswordAndUsername()) {
        this.toast.add({ severity: 'success', detail: 'Login Successful' });
        this.router.navigate(['dashboard'])
      } else {
        this.toast.add({ severity: 'error', detail: 'Try Again' });
      }
    }, 1000)



  }

  validatePasswordAndUsername = () => {

    if (this.username == "") {
      this.validUsername = false;
    } else {
      this.validUsername = true;
    }

    if (this.password == "" || this.password.length < 12) {
      this.validPassword = false;
    } else {
      this.validPassword = true;
    }

    return this.validPassword && this.validUsername;
  }
}
