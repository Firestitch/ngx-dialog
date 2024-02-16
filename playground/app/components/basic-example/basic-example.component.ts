import { Component } from '@angular/core';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent } from './../basic-dialog';

@Component({
  selector: 'basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.scss'],
})
export class BasicExampleComponent {

  public dialogRef;
  public config = {
    mobileMode: 'bottom',
  };

  constructor(
    private dialog: FsDialog,
  ) {
  }

  public open(mobileMode) {
    this.dialogRef = this.dialog.open(BasicDialogComponent, {
      data: { mobileMode },
      width: '800px',
    });
  }
}
