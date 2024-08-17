import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { checkCandidateAccess, checkHrAccess } from '../../../shared/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  checkCandidateAccess = checkCandidateAccess;
  checkHrAccess = checkHrAccess;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    console.log('Inside header');
  }

  logout() {
    this.authService.logout();
  }

  goToProfilePage() {
    this.router.navigate(['candidate/profile']);
  }
}
