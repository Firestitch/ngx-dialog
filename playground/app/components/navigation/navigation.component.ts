import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsMessage } from '@firestitch/message';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent } from './../basic-dialog';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  public dialogRef;
  public config = {
    mobileMode: 'bottom',
  };

  constructor(
    private _dialog: FsDialog,
    private _message: FsMessage,
  ) {
  }

  public open() {
    this.dialogRef = this._dialog.open(BasicDialogComponent, {
      data: { mobileMode: this.config.mobileMode },
      width: '800px',
    });

    this.dialogRef
      .afterClosed()
      .subscribe(() => {
        this._message.success('Closed');
      });
  }

  public openLazyRoute() {
    this._dialog.navigate(['lazy-dialog']);
  }

  public close(data = null) {
    this.dialogRef.close(data);
  }
}
