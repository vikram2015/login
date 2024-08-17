import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config/config';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { ToastService } from '../../../common-module/toast-message/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(
    private httpClient: HttpClient,
    private toastMessage: ToastService
  ) {}

  getJobDetails(query: any): Observable<any> {
    return this.httpClient
      .get(config.serverAddress + 'job/list', { params: query })
      .pipe(
        tap({
          next: (data: any) => {
            // console.log('data in job service file');
            // console.log(data.result);
            // let result = data.result;
            if (data.status === 200) {
              return data;
            }
          },
          error: (err) => {
            return err;
          },
          complete: () => {
            // this.toastMessage.show('success','Success','Found')
          },
        }),
        catchError((error: HttpErrorResponse): Observable<any> => {
          if (error.status == 404) {
            return of(null);
          }
          return throwError(() => error);
        })
      );
  }

  getSingleJob(id: string): Observable<any> {
    return this.httpClient.get(config.serverAddress + `job/oneJob/${id}`).pipe(
      tap({
        next: (result: any) => {
          if (result.status == 200) {
            return result;
          }
        },
        error: (err) => {
          return err;
        },
        complete: () => {
          // this.toastMessage.show('success','Success','Found')
        },
      }),
      catchError((error: HttpErrorResponse): Observable<any> => {
        if (error.status === 404) {
          return of(null);
        }
        return throwError(() => error);
      })
    );
  }


  applyNewJob(job: any): Observable<any> {
    return this.httpClient.post(config.serverAddress + `apply/newJob`, job).pipe(
      tap({
        next: (result: any) => {
          if (result.status == 200) {
            return result;
          }
        },
        error: (err) => {
          return err;
        },
        complete: () => {
          // this.toastMessage.show('success','Success','Found')
        },
      }),
      catchError((error: HttpErrorResponse): Observable<any> => {
        if (error.status === 404) {
          return of(null);
        }
        return throwError(() => error);
      })
    );
  }
}
