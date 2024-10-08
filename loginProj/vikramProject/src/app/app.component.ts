import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnInit {
  title = 'vikramProject';
  userAuthentication: boolean = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  screenSize: boolean = false;
  navbarFixed: boolean = false;
  MenuForSelectedRole: string = '';
  constructor(
    private observer: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.user.subscribe((data) => {
      this.MenuForSelectedRole = data.role ? data.role : '';
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.screenSize = true;
        
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.screenSize = false;
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  async ngAfterViewChecked() {
    // this.userAuthentication = false;
    this.sidenav.close();
    if (this.authService.isUserAuthenticated()) {
      this.userAuthentication = true;
      this.sidenav.open();
    }
    // console.log('this.userAuthentication');
    // console.log(this.userAuthentication);

    this.changeDetector.detectChanges();
  }

  getMenuRole() {
    // return localStorage.getItem('role');
    return 'admin';
  }

  // @HostListener('window:scroll', ['$event']) onScroll() {
  //   if (window.scrollY > 100) {
  //     this.navbarFixed = true;
  //   } else {
  //     this.navbarFixed = false;
  //   }
  // }
}
