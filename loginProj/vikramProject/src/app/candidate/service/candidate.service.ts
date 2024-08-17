import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private httpClient: HttpClient) {}

  candidateProfile(query: any): Observable<any> {
    return this.httpClient.get(config.serverAddress + 'user/profile', {
      params: query
    }).pipe(
      tap({
        next: (res: any) => {
          if (res.status === 200) {
            return res;
          }
        },
        error: (err) => {
          return err;
        },
        complete: () => {
          console.log('user details fetched');
        },
      })
    );
  }


  updateCandidateProfile(id: string, candidateDetails: any): Observable<any> {
    return this.httpClient.put(config.serverAddress + `user/profile/${id}`, candidateDetails).pipe(
      tap({
        next: (res: any) => {
          if (res.status === 200) {
            return res;
          }
        },
        error: (err) => {
          return err;
        },
        complete: () => {
          console.log('user details fetched');
        },
      })
    );
  }
}
