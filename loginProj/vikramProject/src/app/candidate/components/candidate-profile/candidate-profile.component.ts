import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../service/candidate.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ToastService } from '../../../common-module/toast-message/toast/toast.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.scss',
})
export class CandidateProfileComponent implements OnInit {
  candidateName: string = '';
  candidateID: any;
  candidateDetails: any = {};
  candidateForm: FormGroup;

  constructor(
    private candidateService: CandidateService,
    private formBuilder: FormBuilder,
    private toastMessage: ToastService
  ) {
    this.candidateID = localStorage.getItem('id');
    this.candidateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(10),
        ],
      ],
      email: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
    });
  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    let query = {
      _id: this.candidateID,
    };
    this.candidateService.candidateProfile(query).subscribe((result: any) => {
      console.log('result in component');
      console.log(result);
      this.candidateForm.patchValue({
        firstName: result.result.firstName,
        middleName: result.result.middleName,
        lastName: result.result.lastName,
        contact: result.result.contact,
        email: result.result.email,
        dateOfBirth: result.result.dateOfBirth,
      });
      this.candidateName = result.result.firstName;
    });
  }

  updateCandidateDetails() {
    this.candidateDetails = {
      _id: localStorage.getItem('id'),
      first_name: this.candidateForm.get('firstName')?.value,
      middle_name: this.candidateForm.get('middleName')?.value,
      last_name: this.candidateForm.get('lastName')?.value,
      contact: this.candidateForm.get('contact')?.value,
      email: this.candidateForm.get('email')?.value,
      date_of_birth: this.candidateForm.get('dateOfBirth')?.value,
    };
    this.candidateService
      .updateCandidateProfile(this.candidateID, this.candidateDetails)
      .subscribe((result) => {
        if (result.status === 200) {
          this.toastMessage.show('success', 'Success', `${result.Msg}`);
          this.candidateForm.patchValue({
            firstName: result.result.firstName,
            middleName: result.result.middleName,
            lastName: result.result.lastName,
            contact: result.result.contact,
            email: result.result.email,
            dateOfBirth: result.result.dateOfBirth,
          });
        } else {
          this.toastMessage.show('error', 'Error', 'Something went wrong');
        }
      });
  }
}
