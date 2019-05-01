import { Component, Input, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>'
})
export class FsDialogComponent implements AfterContentInit {

  @Input('mobileMode') mobileMode = 'fs-mobile-mode-full';

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    const backdrop = this.findBackdrop(this.el.nativeElement);

    if (this.mobileMode === 'bottom') {
      backdrop.classList.add('fs-mobile-mode-bottom');
    }

    if (this.mobileMode === 'float') {
      backdrop.classList.add('fs-mobile-mode-float');
    }

    if (this.mobileMode === 'full') {
      backdrop.classList.add('fs-mobile-mode-full');
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
