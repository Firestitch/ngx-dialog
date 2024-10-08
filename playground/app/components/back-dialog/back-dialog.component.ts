import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './back-dialog.component.html',
  styleUrls: ['./back-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackDialogComponent {

  public object: any = {};
  public input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis urna at arcu fringilla porta. Fusce tincidunt, nunc accumsan tincidunt tincidunt, quam lorem rhoncus odio, ultricies varius quam orci id sapien. Nunc aliquet tempus augue at sodales. Mauris vel fringilla massa. Mauris nisi magna, gravida eget nisi sit amet, fermentum placerat mi. Nulla vitae efficitur ligula. Mauris ullamcorper tortor id magna euismod, eu faucibus eros imperdiet. Etiam pretium et enim quis gravida.';
  public inputs = [];
  public mobileMode;

  constructor(
    private dialogRef: MatDialogRef<BackDialogComponent>,
  ) {
    this.inputs = [this.input];
  }

  public save() {
    this.dialogRef.close();
  }

  public close() {
    this.dialogRef.close();
  }

  public addText() {
    this.inputs.push(this.input);
  }

  public removeText() {
    this.inputs.pop();
  }
}
