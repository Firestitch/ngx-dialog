import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent } from './../basic-dialog';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet],
})
export class NavigationComponent {
  private _dialog = inject(FsDialog);
  private _message = inject(FsMessage);


  public dialogRef;
  public config = {
    mobileMode: 'bottom',
  };

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
