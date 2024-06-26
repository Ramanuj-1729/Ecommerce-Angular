import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signInFormValue: any = {};

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService,  private router: Router) { }

  onSiginSubmit() {
    this.authService.login(this.signInFormValue).subscribe((response) => {
      if(response){
        this.authService.isLoggedIn = true;

        localStorage.setItem('token', response.token);

        this.signInFormValue = {};
        this.router.navigateByUrl('/home');
      }
    },
    (error) => {
      console.error(error);
    });
  }

  ngOnInit(): void {
  }

}
