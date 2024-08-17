import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlainObject } from 'lodash';
type Severities = 'success' | 'info' | 'warn' | 'error';

export interface MessageConfig {
  severity?: Severities;
  summary?: string;
  detail?: string;
  id?: any;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
  icon?: string;
  contentStyleClass?: string;
  styleClass?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public notificationChange: Subject<Object> = new Subject<Object>();
  message: string = '';

  constructor() {}

  async show(severity?: Severities, summary?: string, detail?: string) {
    console.log(' ########### ')
    console.log(severity)
    console.log(summary)
    console.log(detail)
    this.notificationChange.next({ severity, summary, detail });
  }

  parseMessage(errorObject: { message?: any; Err: string }) {
    if (errorObject.Err) return errorObject.Err;
    if (
      typeof errorObject?.message === 'string' &&
      errorObject.message.length < 250
    ) {
      return errorObject.message;
    } else if (isPlainObject(errorObject.message)) {
      return errorObject.message[Object.keys(errorObject.message)[0]];
    } else return '[not supported] Somrthing Went Wrong!.';
  }

  async httpErrorMessage(error: HttpErrorResponse) {
    let errorConfig: MessageConfig = {};
    errorConfig.severity = 'error';
    switch (error.status) {
      case 500: {
        errorConfig.summary = 'Error';
        errorConfig.detail = 'Somrthing Went Wrong';
        break;
      }
      case 400:
      case 422:
        errorConfig.summary = 'Error';
        errorConfig.detail = this.parseMessage(error.error);
        break;
      case 404:
        errorConfig.summary = 'Error';
        errorConfig.detail = 'Not Found';
        break;

      // default:
      //   break;
    }
    this.notificationChange.next(errorConfig);
  }
}
