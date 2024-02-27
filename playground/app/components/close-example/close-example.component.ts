import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsDialog } from 'fs-package';

import { CloseDialogComponent } from '../close-dialog';


@Component({
  selector: 'app-close-example',
  templateUrl: './close-example.component.html',
  styleUrls: ['./close-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseExampleComponent {

  constructor(
    private _dialog: FsDialog,
  ) {
  }

  public open() {
    this._dialog.open(CloseDialogComponent, {
      width: '800px',
    });
  }
}
