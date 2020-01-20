import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  Optional,
  SkipSelf
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogComponent implements AfterContentInit, OnDestroy {

  @Input('mobileMode') mobileMode = 'full';

  constructor(@Optional() @SkipSelf() private _dialogRef: MatDialogRef<any>) {}

  ngAfterContentInit() {

    const mobileMode = 'fs-dialog-mobile-mode-' + this.mobileMode;

    if (this._dialogRef) {
      const pane = (<any>this._dialogRef)._overlayRef.overlayElement;

      if (pane) {
        pane.classList.add('fs-dialog-overlay-pane');
        pane.classList.add(mobileMode);
      }

      const backdrop = (<any>this._dialogRef)._overlayRef.backdropElement;

      if (backdrop) {
        backdrop.classList.add('fs-dialog-overlay-backdrop');
        backdrop.classList.add(mobileMode);
      }
    }

    (<any>window).document.body.classList.add('fs-dialog-open', mobileMode);
  }

  ngOnDestroy() {
    (<any>window).document.body.classList.remove('fs-dialog-open', `fs-dialog-mobile-mode-${this.mobileMode}`);
  }
}
