import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasicDialogComponent} from './../basic-dialog';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';

@Component({
  selector: 'basic-example',
  templateUrl: 'basic.component.html'
})
export class BasicComponent {

  public dialogRef;
  public config = {
    mobileMode: 'bottom'
  };

  constructor(private dialog: MatDialog,
              private exampleComponent: FsExampleComponent,
      private message: FsMessage) {
    exampleComponent.setConfigureComponent(KitchenSinkConfigureComponent, { config: this.config });
  }


  public open() {

    this.dialogRef = this.dialog.open(BasicDialogComponent, {
      data: { mobileMode: this.config.mobileMode },
      width: '800px'
    });

    this.dialogRef.afterClosed().subscribe(response => {

    });
  }

  close(data = null) {
    this.dialogRef.close(data);
  }
}
