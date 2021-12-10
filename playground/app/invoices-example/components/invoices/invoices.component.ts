import { Component, ViewChild } from '@angular/core';
import { FsListComponent, FsListConfig } from '@firestitch/list';
import { InvoicesService } from '../../services/invoices.service';
import { map, switchMap } from 'rxjs/operators';
import { FsDialog } from 'fs-package';
import { InvoiceComponent } from '../invoice';

@Component({
  templateUrl: './invoices.component.html',
})
export class InvoicesComponent {

  public config: FsListConfig;

  @ViewChild(FsListComponent)
  public list: FsListComponent;

  constructor(
    private _invoicesService: InvoicesService,
    private _fsDialog: FsDialog,
  ) {
    this._initConfig();

    this._fsDialog.getDialogRef$(InvoiceComponent)
      .pipe(
        switchMap((dialogRef) => dialogRef.afterClosed()),
      )
      .subscribe((data) => {
        console.log('DialogRef Data:', data);

        if (data) {
          this.list.reload();
        }
      })
  }

  private _initConfig(): void {
    this.config = {
      fetch: () => {
        return this._invoicesService.gets()
          .pipe(
            map((data) => {
              return {
                data
              };
            })
          )
      }
    };
  }

}
