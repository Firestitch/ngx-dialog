import { Component, Input, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>'
})
export class FsDialogComponent implements AfterContentInit {

  @Input('mobileMode') mobileMode = 'fs-mobile-mode-full';

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const backdrop = this.findBackdrop(this.el.nativeElement);
    backdrop.classList.add('mobile-mode-' + this.mobileMode);
  }

  private findBackdrop(el) {
    if (el) {
      if (el.classList.contains('fs-dialog-overlay-pane')) {
        return el;
      }
      return this.findBackdrop(el.parentNode);
    }
  }
}
