import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent } from './../basic-dialog';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';

@Component({
    selector: 'basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, FsFormModule],
})
export class BasicExampleComponent {

  public dialogRef;
  public config = {
    mobileMode: 'bottom',
  };

  constructor(
    private _dialog: FsDialog,
  ) {
  }

  public  open(mobileMode) {
    this.dialogRef = this._dialog
      .open(BasicDialogComponent, {
        data: { mobileMode },
        width: '800px',
      });
  }
}
