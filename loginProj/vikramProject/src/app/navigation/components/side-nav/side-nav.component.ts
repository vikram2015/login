import { Component, Input, OnInit } from '@angular/core';
import { checkCandidateAccess } from '../../../shared/utils';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  @Input() sidenav!: any;
  @Input() menuRole!: string | null;
  checkCandidateAccess = checkCandidateAccess;

  constructor() {}

  ngOnInit() {
    console.log('Inside onInit function');
  }
}
