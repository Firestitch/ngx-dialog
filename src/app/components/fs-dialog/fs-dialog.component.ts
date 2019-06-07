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
    const backdrop = this.findBackdrop(this.el.nativeElement);
    backdrop.classList.add('mobile-mode-' + this.mobileMode);
    (<any>window).document.body.classList.add('fs-dialog-open', `fs-dialog-mobile-mode-${this.mobileMode}`);
  }

  private findBackdrop(el) {
    if (el) {
      if (el.classList.contains('fs-dialog-overlay-pane')) {
        return el;
      }
      return this.findBackdrop(el.parentNode);
    }
  }

  ngOnDestroy() {
    (<any>window).document.body.classList.remove('fs-dialog-open', `fs-dialog-mobile-mode-${this.mobileMode}`);
  }
}
