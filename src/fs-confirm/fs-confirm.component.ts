import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fs-confirm',
  templateUrl: 'fs-confirm.component.html',
})
export class FsConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<FsConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
}
