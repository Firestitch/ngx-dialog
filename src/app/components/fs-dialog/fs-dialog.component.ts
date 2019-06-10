import { Component, Input, AfterContentInit, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>'
})
export class FsDialogComponent implements AfterContentInit, OnDestroy {

  @Input('mobileMode') mobileMode = 'full';

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const pane = this.findOverlayPane(this.el.nativeElement);

    if (pane) {
      pane.classList.add('mobile-mode-' + this.mobileMode);
    }

    (<any>window).document.body.classList.add('fs-dialog-open', `fs-dialog-mobile-mode-${this.mobileMode}`);
  }

  private findOverlayPane(el) {
    if (el) {

      if (!el.classList) {
        return null;
      }

      if (el.classList.contains('fs-dialog-overlay-pane')) {
        return el;
      }
      return this.findOverlayPane(el.parentNode);
    }
  }

  ngOnDestroy() {
    (<any>window).document.body.classList.remove('fs-dialog-open', `fs-dialog-mobile-mode-${this.mobileMode}`);
  }
}
