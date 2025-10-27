import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsDialog } from 'fs-package';

import { CloseDialogComponent } from '../close-dialog';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';


@Component({
    selector: 'app-close-example',
    templateUrl: './close-example.component.html',
    styleUrls: ['./close-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, FsFormModule]
})
export class CloseExampleComponent {

  constructor(
    private _dialog: FsDialog,
  ) {
  }

  public open() {
    this._dialog.open(CloseDialogComponent, {
      width: '800px',
    });
  }
}
