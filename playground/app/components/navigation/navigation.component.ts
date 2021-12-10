import { Component } from '@angular/core';

import { FsExampleComponent } from '@firestitch/example';

import { FsDialog } from 'fs-package';

import { BasicDialogComponent} from './../basic-dialog';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

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

  public openLazyRoute() {
    this.dialog.navigate(['lazy-dialog']);
  }

  close(data = null) {
    this.dialogRef.close(data);
  }
}
