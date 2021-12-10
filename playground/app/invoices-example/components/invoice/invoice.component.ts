import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouteObserver } from '@firestitch/core';
import { InvoicesService } from '../../services/invoices.service';
import { tap } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { FsMessage } from '@firestitch/message';


@Component({
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {

  public invoice$ = new RouteObserver<any>(this._route, 'invoice');
  public invoice: any;

  constructor(
    private _route: ActivatedRoute,
    private _invoicesService: InvoicesService,
    private _dialogRef: MatDialogRef<any>,
    private _message: FsMessage,
  ) {
    this.invoice$
      .subscribe((invoice) => {
        this.invoice = invoice;
      })
  }

  public save = () => {
    return this._invoicesService.save(this.invoice)
      .pipe(
        tap((res) => {
          this._message.success('Saved');

          this._dialogRef.close(res);
        })
      );
  }
}
