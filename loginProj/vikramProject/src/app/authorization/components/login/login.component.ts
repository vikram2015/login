import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';
import { checkCandidateAccess } from '../../../shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;
  checkCandidateAccess = checkCandidateAccess;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (localStorage.getItem('role')) {
      if (this.checkCandidateAccess()) {
        this.router.navigate(['candidate/profile']);
      } else {
        this.router.navigate(['hr/candidate-list']);
      }
    }
  }
  ngOnInit() {}

  async submitForm() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    try {
      let credentials = await this.authService.login({ userName, password });
      console.log('credentials');
      console.log(credentials);
      if (credentials.status === 200) {
        if (checkCandidateAccess()) {
          this.router.navigate(['candidate/profile']);
        } else {
          this.router.navigate(['hr/candidate-list']);
        }
      }
    } catch (err: any) {
      if (err) {
        console.log('err in login');
        console.log(err);
      }
    }
  }

  registerUser() {
    this.router.navigate(['register']);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
