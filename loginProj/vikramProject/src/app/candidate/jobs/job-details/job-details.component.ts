import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent implements OnInit {
  jobID: string = '';
  jobDetails: any = {};
  constructor(
    private activeRoute: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {
    this.activeRoute.params.subscribe((params) => {
      console.log('params');
      console.log(params);
      this.jobID = params['id'];
    });
  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    let query = {
      id: this.jobID,
    };
    this.jobService.getSingleJob(this.jobID).subscribe((result) => {
      console.log('result');
      console.log(result);
      this.jobDetails = result.result[0]
      console.log('this.jobDetails')
      console.log(this.jobDetails)
    });
  }

  jobDetailsPage(){
    this.router.navigate(['candidate/jobs/job-listing'])
  }
}
