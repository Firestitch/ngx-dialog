import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDialogComponent {

  public object: any = {};
  public input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis urna at arcu fringilla porta. Fusce tincidunt, nunc accumsan tincidunt tincidunt, quam lorem rhoncus odio, ultricies varius quam orci id sapien. Nunc aliquet tempus augue at sodales. Mauris vel fringilla massa. Mauris nisi magna, gravida eget nisi sit amet, fermentum placerat mi. Nulla vitae efficitur ligula. Mauris ullamcorper tortor id magna euismod, eu faucibus eros imperdiet. Etiam pretium et enim quis gravida.';
  public inputs = [];
  public mobileMode;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<BasicDialogComponent>,
  ) {
    this.mobileMode = data.mobileMode;
    this.inputs = [this.input];
  }

  public save() {
    this._dialogRef.close();
  }

  public addText() {
    this.inputs.push(this.input);
  }

  public removeText() {
    this.inputs.pop();
  }
}
