import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'basic-dialog',
  templateUrl: 'basic-dialog.component.html',
  styleUrls: ['basic-dialog.component.scss']
})
export class BasicDialogComponent {

  public object: any = {};
  public input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis urna at arcu fringilla porta. Fusce tincidunt, nunc accumsan tincidunt tincidunt, quam lorem rhoncus odio, ultricies varius quam orci id sapien. Nunc aliquet tempus augue at sodales. Mauris vel fringilla massa. Mauris nisi magna, gravida eget nisi sit amet, fermentum placerat mi. Nulla vitae efficitur ligula. Mauris ullamcorper tortor id magna euismod, eu faucibus eros imperdiet. Etiam pretium et enim quis gravida.

  Nam quis mauris massa. Mauris malesuada commodo erat a tempus. Pellentesque elementum congue commodo. Ut id dolor ex. Etiam feugiat diam justo, vitae viverra turpis iaculis et. Suspendisse dictum metus at nisi fermentum, nec scelerisque quam blandit. Mauris ultricies, mauris ac volutpat consectetur, purus tellus finibus mi, sit amet sodales magna quam sit amet augue. Aliquam vel tempor mi, ut accumsan ligula. Pellentesque pellentesque ex nibh. Integer lobortis, neque ut scelerisque egestas, orci magna feugiat lorem, quis iaculis turpis massa sit amet tortor. Curabitur semper porta justo, at lobortis augue gravida a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer malesuada pellentesque dictum. Praesent ut pharetra urna.`;
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
