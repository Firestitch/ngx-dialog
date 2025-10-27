import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsDialogComponent } from '../../../../src/app/components/dialog/fs-dialog.component';
import { FsDialogTitleComponent } from '../../../../src/app/components/dialog-title/dialog-title.component';
import { FsDialogSupertitleDirective } from '../../../../src/app/directives/dialog-supertitle.directive';
import { FsDialogSubtitleDirective } from '../../../../src/app/directives/dialog-subtitle.directive';
import { FsDialogTitleDirective } from '../../../../src/app/directives/dialog-title.directive';
import { NgTemplateOutlet } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    templateUrl: './close-dialog.component.html',
    styleUrls: ['./close-dialog.component.scss'],
    standalone: true,
    imports: [FormsModule, FsFormModule, FsDialogComponent, FsDialogTitleComponent, FsDialogSupertitleDirective, FsDialogSubtitleDirective, FsDialogTitleDirective, NgTemplateOutlet, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class CloseDialogComponent {
  private dialogRef = inject<MatDialogRef<CloseDialogComponent>>(MatDialogRef);


  public object: any = {};
  public input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis urna at arcu fringilla porta. Fusce tincidunt, nunc accumsan tincidunt tincidunt, quam lorem rhoncus odio, ultricies varius quam orci id sapien. Nunc aliquet tempus augue at sodales. Mauris vel fringilla massa. Mauris nisi magna, gravida eget nisi sit amet, fermentum placerat mi. Nulla vitae efficitur ligula. Mauris ullamcorper tortor id magna euismod, eu faucibus eros imperdiet. Etiam pretium et enim quis gravida.`;
  public inputs = [];
  public mobileMode;

  constructor() {
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
