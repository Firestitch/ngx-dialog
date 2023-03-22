import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogComponent implements AfterContentInit, OnDestroy, OnInit, OnChanges {

  @Input() 
  public mobileMode: 'full' | 'float' | 'bottom' = 'full';
  
  @Input() 
  public mobileWidth = '500px';

  @Input() 
  public dialogMode: 'full' | 'float' | 'bottom';

  private _destroy$ = new Subject();

  public constructor(
    @Optional() @SkipSelf() private _dialogRef: MatDialogRef<any>,
    private _breakpointObserver: BreakpointObserver,
  ) {}
  
  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.dialogMode) {
      if(changes.dialogMode.currentValue) {
        this.enableDialogMode(this.dialogMode);
      } else {
        this.disableDialogMode();
      }
    }
  }

  public ngOnInit(): void {
    if(this.mobileWidth) {
      this._breakpointObserver
        .observe([`(min-width: ${this.mobileWidth})`])
        .pipe(
          filter(() => !this.dialogMode),
          takeUntil(this._destroy$),
        )
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.disableDialogMode();               
          } else {
            this.enableDialogMode(this.mobileMode);
          }
        });
    }
  }

  public enableDialogMode(mode) {
    const dialogMode = 'fs-dialog-mode-' + mode;
    this.overlayEl?.classList.add(dialogMode);
    this.backdropEl?.classList.add(dialogMode);
    this.body.classList.add('fs-dialog-open', dialogMode);
  }

  public disableDialogMode() {
    ['full', 'float', 'bottom']
      .forEach((mode) => {
        const dialogMode = 'fs-dialog-mode-' + mode;
        this.overlayEl?.classList.remove(dialogMode);
        this.backdropEl?.classList.remove(dialogMode);
        this.body.classList.remove('fs-dialog-open', dialogMode);   
      });
  }

  public get overlayEl() {
    return (<any>this._dialogRef)?._overlayRef.overlayElement;
  }

  public get backdropEl() {
    return (<any>this._dialogRef)?._overlayRef.backdropElement;
  }

  public get body() {
    return (<any>window).document.body;
  }

  public ngAfterContentInit(): void {
    this.overlayEl?.classList.add('fs-dialog-overlay-pane');
    this.backdropEl?.classList.add('fs-dialog-overlay-backdrop');
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this.disableDialogMode();
  }
}
