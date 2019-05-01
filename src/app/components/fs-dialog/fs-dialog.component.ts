import { Component, Input, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>'
})
export class FsDialogComponent implements AfterContentInit {

  @Input('mobileMode') mobileMode;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    const backdrop = this.findBackdrop(this.el.nativeElement);

    if (this.mobileMode === 'bottom') {
      backdrop.classList.add('fs-mobile-mode-bottom');
    }
  }

  private findBackdrop(el) {
    if (el) {
      if (el.classList.contains('fs-dialog-backdrop')) {
        return el;
      }
      return this.findBackdrop(el.parentNode);
    }
  }
}
