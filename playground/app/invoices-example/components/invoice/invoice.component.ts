import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RouteObserver } from '@firestitch/core';
import { FsMessage } from '@firestitch/message';
import { FS_TASK_CONFIG } from '@firestitch/task';

import { filter, tap } from 'rxjs/operators';

import { InvoicesService } from '../../services/invoices.service';


@Component({
  templateUrl: './invoice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceComponent {

  public invoice$: RouteObserver<any>;
  public fsDialogConfig = inject(FS_TASK_CONFIG);
  public invoice: any;

  private _cdRef = inject(ChangeDetectorRef);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private _route: ActivatedRoute,
    private _invoicesService: InvoicesService,
    private _dialogRef: MatDialogRef<any>,
    private _message: FsMessage,
  ) {
    this.invoice$ = new RouteObserver<any>(this._route, 'invoice');
    if (data) {
      this.invoice = data.invoice;
    }

    this.invoice$
      .pipe(
        filter((invoice) => !!invoice),
      )
      .subscribe((invoice) => {
        this.invoice = invoice;
        this._cdRef.markForCheck();
      });
  }

  public save = () => {
    return this._invoicesService.save(this.invoice)
      .pipe(
        tap((res) => {
          this._message.success('Saved');

          this._dialogRef.close(res);
        }),
      );
  };
}
