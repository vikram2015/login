import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliedStatusComponent } from './job-applied-status.component';

describe('JobAppliedStatusComponent', () => {
  let component: JobAppliedStatusComponent;
  let fixture: ComponentFixture<JobAppliedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAppliedStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobAppliedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
