import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  SimpleChanges,
  SkipSelf,
} from '@angular/core';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { FS_DAILOG_CONFIG } from '../../injectors';
import { DialogConfig } from '../../interfaces';
import { FsDialogTitleComponent } from '../dialog-title';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>',
  styleUrls: ['./fs-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogComponent implements AfterContentInit, OnDestroy, OnInit, OnChanges {

  @ContentChild(FsDialogTitleComponent) 
  public dialogTitle: FsDialogTitleComponent;

  @ContentChildren(MatDialogClose, { descendants: true, read: ElementRef }) 
  public dialogCloseButton: QueryList<ElementRef[]>;
  
  @Input()
  public mobileMode: 'full' | 'float' | 'bottom' | 'peek';

  @Input()
  public mobileButtonPlacement: 'flow' | 'bottom';

  @Input()
  public mobileWidth = '600px';

  @HostBinding('class')
  public mobileButtonPlacementClass;

  @Input()
  public mode: 'full' | 'float' | 'bottom' | 'peek';

  @Input()
  public buttonLayout: 'flow' | 'full' = 'flow';

  @Input()
  public fullscreen = false;

  @Input() public fullscreenPercent = 90;

  private _destroy$ = new Subject();

  @HostBinding('class.button-layout-full')
  public get classButtonLayoutFullWidth() {
    return this.buttonLayout === 'full';
  }

  constructor(
    @Optional() @SkipSelf() private _dialogRef: MatDialogRef<any>,
    @Optional() @Inject(FS_DAILOG_CONFIG) private _config: DialogConfig,
    private _breakpointObserver: BreakpointObserver,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.mode && !changes.mode.firstChange) {
      if (changes.mode.currentValue) {
        this.enableMode(this.mode);
      } else {
        this.disableMode();
      }
    }
  }

  public ngOnInit(): void {
    if(this.fullscreen) {
      this.openFullscreen();
    }

    this.mobileMode = this.mobileMode ?? (this._config?.mobileMode || 'full');
    this.mobileButtonPlacement = this.mobileButtonPlacement ?? (this._config?.mobileButtonPlacement || 'flow');

    if (this.mobileWidth) {
      this._breakpointObserver
        .observe([`(min-width: ${this.mobileWidth})`])
        .pipe(
          filter(() => !this.mode),
          takeUntil(this._destroy$),
        )
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.disableMode();
          } else {
            this.enableMode(this.mobileMode);
          }
        });
    }

    if (this.mode) {
      this.enableMode(this.mode);
    }
  }

  public enableMode(mode) {
    const modeClass = `fs-dialog-mode-${mode}`;
    this._dialogRef.addPanelClass(modeClass);
    this.backdropEl?.classList.add(modeClass);
    this.body.classList.add('fs-dialog-open', modeClass);
    this.mobileButtonPlacementClass = `button-placement-${this.mobileButtonPlacement}`;
  }

  public disableMode() {
    this.mobileButtonPlacementClass = null;
    ['full', 'float', 'bottom']
      .forEach((mode) => {
        const modeClass = `fs-dialog-mode-${  mode}`;
        this._dialogRef.removePanelClass(modeClass);
        this.backdropEl?.classList.remove(modeClass);
        this.body.classList.remove('fs-dialog-open', modeClass);
      });
  }

  public get backdropEl() {
    const el = document.getElementById(this._dialogRef.id)?.parentElement?.parentElement;

    if(el?.classList.contains('cdk-global-overlay-wrapper')) {
      const backdropEl = el.previousElementSibling;

      if(backdropEl?.classList.contains('cdk-overlay-backdrop')) {
        return backdropEl;
      }
    }

    return null;
  }

  public get body() {
    return document.body;
  }

  public openFullscreen() {
    this.fullscreen = true;
    const el = document.querySelector(`#${this._dialogRef.id}`).parentElement;
    this._dialogRef.addPanelClass('fs-dialog-fullscreen');

    el.setAttribute('data-fullscreen-width', el.style.width);
    el.setAttribute('data-fullscreen-height', el.style.height);

    el.style.width = `${this.fullscreenPercent}%`;
    el.style.height = `${this.fullscreenPercent}%`;
  }

  public closeFullscreen() {
    this.fullscreen = false;
    const el = document.querySelector(`#${this._dialogRef.id}`).parentElement;
    this._dialogRef.removePanelClass('fs-dialog-fullscreen');

    el.style.width = el.getAttribute('data-fullscreen-width');
    el.style.height = el.getAttribute('data-fullscreen-height');
  }

  public addDialogCloseButtonClasses(elementRefs: any): void {
    elementRefs.forEach((el) => {
      el.nativeElement.classList.add('close-button');
    });    
  }

  public ngAfterContentInit(): void {
    this.dialogCloseButton.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((elementRefs: ElementRef[]) => {
        this.addDialogCloseButtonClasses(elementRefs);
      });
      
    this.addDialogCloseButtonClasses(this.dialogCloseButton.toArray());

    if(this.dialogTitle) {
      this._dialogRef.addPanelClass('fs-dialog-back');
    }

    this._dialogRef.addPanelClass('fs-dialog-overlay-pane');
    this.backdropEl?.classList.add('fs-dialog-overlay-backdrop');
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this.disableMode();
  }
}
