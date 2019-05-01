import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'basic-dialog',
  templateUrl: 'basic-dialog.component.html'
})
export class BasicDialogComponent {

  public object: any = {};
  public input = '';
  public mobileMode;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<BasicDialogComponent>) {
    this.mobileMode = data.mobileMode;
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  addText() {
    this.input = this.input + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consequat nisl, eget egestas orci. Aliquam hendrerit dui eu mauris luctus vehicula. Sed pulvinar lacinia enim vitae varius. Etiam finibus justo ut sapien condimentum, et molestie neque fermentum. Proin mattis erat augue, vitae tempor sem imperdiet in. Cras a eleifend nisi. Praesent accumsan lectus eu ligula volutpat, sed malesuada sapien vestibulum. Morbi rhoncus hendrerit condimentum. Phasellus nunc turpis, ultrices sodales arcu nec, aliquam mattis ipsum.';
  }
}
