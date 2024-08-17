import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  studyMaterialList = [
    {
      courseTitle: 'Java',
      route: 'java',
      imageLogo: 'assets/images/javaLogo.png'
    },
    {
      courseTitle: 'Angular',
      route: 'angular',
      imageLogo: 'assets/images/angularLogo.png'
    },
    {
      courseTitle: 'Node JS',
      route: 'node',
      imageLogo: 'assets/images/nodeLogo.png'
    },
    {
      courseTitle: 'HTML',
      route: 'html',
      imageLogo: 'assets/images/htmlLogo.png'
    },
    {
      courseTitle: 'Javascript',
      route: 'javascript',
      imageLogo: 'assets/images/javascriptLogo.jpg'
    }
  ];
  constructor(private router: Router) {}

}
