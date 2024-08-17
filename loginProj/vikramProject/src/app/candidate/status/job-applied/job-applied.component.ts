import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../jobs/services/job.service';
import { ToastService } from '../../../common-module/toast-message/toast/toast.service';

@Component({
  selector: 'app-job-applied',
  templateUrl: './job-applied.component.html',
  styleUrl: './job-applied.component.scss'
})
export class JobAppliedComponent implements OnInit {
  jobDetails: Array<any> = [];
  constructor(private router: Router, private jobService: JobService, private toastService: ToastService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    let query = {};

    this.jobService.getJobDetails(query).subscribe((data) => {
      console.log('result in job listing constructor');
      console.log(data);
      this.jobDetails = data.result;

      console.log('result in job listing constructor');
      console.log(this.jobDetails);
    });
  }

  jobDetailsPage(job: any) {
    console.log('job');
    console.log(job);
    this.router.navigate([`candidate/jobs/job-details/${job._id}`]);
  }
  applyJob(job: any) {
    console.log('job');
    console.log(job);
    this.jobService.applyNewJob(job).subscribe((result: any) => {
      console.log('result');
      console.log(result);
      if(result.status === 200){
        this.toastService.show('success', 'Success', result.Msg)
      }
    });
    // this.router.navigate([`candidate/jobs/job-details/${job._id}`]);
  }
}
