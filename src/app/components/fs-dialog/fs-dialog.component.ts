import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
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
import { FS_DAILOG_CONFIG } from '../../injectors';
import { DialogConfig } from '../../interfaces';

@Component({
  selector: 'fs-dialog',
  template: '<ng-content></ng-content>',
  styleUrls: ['./fs-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogComponent implements AfterContentInit, OnDestroy, OnInit, OnChanges {

  @Input()
  public mobileMode: 'full' | 'float' | 'bottom' | 'peek';

  @Input()
  public mobileActionPlacement: 'flow' | 'bottom';

  @Input()
  public mobileWidth = '600px';

  @Input()
  public mode: 'full' | 'float' | 'bottom' | 'peek';

  @HostBinding('class')
  public mobileActionPlacementClass;

  private _destroy$ = new Subject();

  public constructor(
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
    this.mobileActionPlacement = this.mobileActionPlacement ?? (this._config?.mobileActionPlacement || 'flow');

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
    mode = 'fs-dialog-mode-' + mode;
    this.overlayEl?.classList.add(mode);
    this.backdropEl?.classList.add(mode);
    this.body.classList.add('fs-dialog-open', mode);
    this.mobileActionPlacementClass = `action-placement-${this.mobileActionPlacement}`;
  }

  public disableMode() {
    this.mobileActionPlacementClass = null;
    ['full', 'float', 'bottom']
      .forEach((mode) => {
        mode = 'fs-dialog-mode-' + mode;
        this.overlayEl?.classList.remove(mode);
        this.backdropEl?.classList.remove(mode);
        this.body.classList.remove('fs-dialog-open', mode);
      });
  }

  public get overlayEl() {
    return (<any>this._dialogRef)?._overlayRef?.overlayElement;
  }

  public get backdropEl() {
    return (<any>this._dialogRef)?._overlayRef?.backdropElement;
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
    this.disableMode();
  }
}
