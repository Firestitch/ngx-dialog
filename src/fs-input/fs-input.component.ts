import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fs-input',
  templateUrl: 'fs-input.component.html',
})
export class FsInputComponent {

  public inputValue = '';

  constructor(
    public dialogRef: MatDialogRef<FsInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public complete() {
    this.dialogRef.close(this.inputValue);
  }
}
