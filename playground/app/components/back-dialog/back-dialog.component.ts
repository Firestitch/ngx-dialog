import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

import { FsFormModule } from '@firestitch/form';

import { FsDialogTitleComponent } from '../../../../src/app/components/dialog-title/dialog-title.component';
import { FsDialogComponent } from '../../../../src/app/components/dialog/fs-dialog.component';
import { FsDialogSubtitleDirective } from '../../../../src/app/directives/dialog-subtitle.directive';


@Component({
  templateUrl: './back-dialog.component.html',
  styleUrls: ['./back-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FormsModule,
    FsFormModule,
    FsDialogComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
    CdkScrollable,
    MatDialogContent,
  ],
})
export class BackDialogComponent {

  public object: any = {};
  public input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis urna at arcu fringilla porta. Fusce tincidunt, nunc accumsan tincidunt tincidunt, quam lorem rhoncus odio, ultricies varius quam orci id sapien. Nunc aliquet tempus augue at sodales. Mauris vel fringilla massa. Mauris nisi magna, gravida eget nisi sit amet, fermentum placerat mi. Nulla vitae efficitur ligula. Mauris ullamcorper tortor id magna euismod, eu faucibus eros imperdiet. Etiam pretium et enim quis gravida.';
  public inputs = [];
  public mobileMode;

  private _dialogRef = inject<MatDialogRef<BackDialogComponent>>(MatDialogRef);

  constructor() {
    this.inputs = [this.input];
  }

  public save() {
    this._dialogRef.close();
  }

  public close() {
    this._dialogRef.close();
  }

  public addText() {
    this.inputs.push(this.input);
  }

  public removeText() {
    this.inputs.pop();
  }
}
