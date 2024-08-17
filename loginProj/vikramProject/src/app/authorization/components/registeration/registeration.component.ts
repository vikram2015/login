import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.scss',
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async submitForm() {
    const firstName = this.registerForm.get('firstName')?.value;
    const middleName = this.registerForm.get('middleName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    const userName = this.registerForm.get('userName')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    try {
      let credentials = await this.authService.register({
        firstName,
        middleName,
        lastName,
        userName,
        email,
        password,
      });
      if (credentials.status === 200) {
        this.router.navigate(['dashboard']);
      }
    } catch (err: any) {
      if (err) {
        console.log('err in login');
        console.log(err);
      }
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
