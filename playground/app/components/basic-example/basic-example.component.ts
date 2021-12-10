import { Component } from '@angular/core';

import { FsExampleComponent } from '@firestitch/example';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent} from './../basic-dialog';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'basic-example',
  templateUrl: 'basic-example.component.html',
  styleUrls: ['./basic-example.component.scss'],
})
export class BasicExampleComponent {

  public dialogRef;
  public config = {
    mobileMode: 'bottom'
  };

  constructor(
    private dialog: FsDialog,
    private exampleComponent: FsExampleComponent,
    private message: FsMessage,
  ) {
    exampleComponent.setConfigureComponent(KitchenSinkConfigureComponent, { config: this.config });
  }


  public open() {
    this.dialogRef = this.dialog.open(BasicDialogComponent, {
      data: { mobileMode: this.config.mobileMode },
      width: '800px'
    });

    this.dialogRef
      .afterClosed()
      .subscribe((response) => {
        this.message.success('Closed');
      });
  }
}
