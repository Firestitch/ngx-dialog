import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';

import { RouteObserver } from '@firestitch/core';
import { FsMessage } from '@firestitch/message';
import { FS_TASK_CONFIG } from '@firestitch/task';

import { filter, tap } from 'rxjs/operators';

import { InvoicesService } from '../../services/invoices.service';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsDialogComponent } from '../../../../../src/app/components/dialog/fs-dialog.component';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { JsonPipe } from '@angular/common';


@Component({
    templateUrl: './invoice.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        FsDialogComponent,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatInput,
        MatDialogActions,
        JsonPipe,
    ],
})
export class InvoiceComponent {
  data = inject(MAT_DIALOG_DATA);
  private _route = inject(ActivatedRoute);
  private _invoicesService = inject(InvoicesService);
  private _dialogRef = inject<MatDialogRef<any>>(MatDialogRef);
  private _message = inject(FsMessage);


  public invoice$: RouteObserver<any>;
  public fsDialogConfig = inject(FS_TASK_CONFIG);
  public invoice: any;

  private _cdRef = inject(ChangeDetectorRef);

  constructor() {
    const data = this.data;

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
