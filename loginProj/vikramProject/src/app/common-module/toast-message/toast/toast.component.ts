import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  providers: [MessageService],
})
export class ToastComponent implements OnInit, OnDestroy {
  msgs: Array<any> = [];
  subscription: Subscription | undefined;

  constructor(
    private msgService: MessageService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.showSuccess();
  }

  async showSuccess() {
    this.subscription = await this.toastService.notificationChange.subscribe({
      next: (notification: any) => {
        this.msgService.add({
          severity: notification['severity'],
          summary: notification['summary'],
          detail: notification['detail'],
        });
        this.msgs.length = 0;
        this.msgs.push(notification);
      },
      error: () => {
        this.msgService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something Went Wrong',
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
