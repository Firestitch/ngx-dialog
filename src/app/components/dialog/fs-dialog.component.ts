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
import { takeUntil } from 'rxjs/operators';

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
  public mobileMode: 'full' | 'float' | 'bottom' | 'peek' = 'full';

  @Input()
  public mobileButtonPlacement: 'flow' | 'bottom';

  @Input()
  public mobileWidth = '600px';

  @HostBinding('class')
  public mobileButtonPlacementClass;

  @Input()
  public mode: 'full' | 'float' | 'bottom' | 'peek' | 'stretch';

  @Input()
  public buttonLayout: 'flow' | 'full' = 'flow';

  @HostBinding('class.close-button')
  public closeButton = false;

  @HostBinding('class.button-layout-full')
  public get classButtonLayoutFullWidth() {
    return this.buttonLayout === 'full';
  }

  private _destroy$ = new Subject();

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
    this.mobileMode = this.mobileMode ?? (this._config?.mobileMode || 'full');
    this.mobileButtonPlacement = this.mobileButtonPlacement ?? (this._config?.mobileButtonPlacement || 'flow');

    if (this.mobileWidth) {
      this._breakpointObserver
        .observe([`(min-width: ${this.mobileWidth})`])
        .pipe(
          takeUntil(this._destroy$),
        )
        .subscribe((state: BreakpointState) => {
          this.disableMode();

          if (state.matches) {
            this.enableMode(this.mode);
          } else {
            this.enableMode(this.mobileMode);
          }
        });
    }
  }

  public enableMode(mode) {
    this.disableMode();
    const modeClass = `fs-dialog-mode-${mode}`;
    this._dialogRef.addPanelClass(modeClass);
    this.backdropEl?.classList.add(modeClass);
    this.body.classList.add('fs-dialog-open', modeClass);
    this.mobileButtonPlacementClass = `button-placement-${this.mobileButtonPlacement}`;
  }

  public disableMode() {
    this.mobileButtonPlacementClass = null;
    ['full', 'float', 'bottom', 'peek', 'stretch']
      .forEach((mode) => {
        const modeClass = `fs-dialog-mode-${mode}`;
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

    this._dialogRef.addPanelClass('fs-dialog-overlay-pane');
    this.backdropEl?.classList.add('fs-dialog-overlay-backdrop');
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
    this.disableMode();
  }
}
