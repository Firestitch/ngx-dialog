import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsDialog } from 'fs-package';

import { BackDialogComponent } from '../back-dialog';


@Component({
  selector: 'app-back-example',
  templateUrl: './back-example.component.html',
  styleUrls: ['./back-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackExampleComponent {

  constructor(
    private _dialog: FsDialog,
  ) {
  }

  public open() {
    this._dialog.open(BackDialogComponent, {
      width: '800px',
    });
  }
}
