import {
  Component, ComponentFactoryResolver,
  inject,
  Injector,
  OnDestroy, OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, NavigationStart, Router,
} from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { getPathToRouteParent } from '@firestitch/core';

import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';


import { IFsDialogRouteConfig } from '../../interfaces/route-data.interface';
import { FsDialogRouter } from '../../serivces/fs-dialog-router';


@Component({
  template: '',
})
export class FsDialogRouteComponent implements OnInit, OnDestroy {

  private _dialogRef: MatDialogRef<unknown, unknown>;
  private _hasActiveNavigation = false;
  private _destroy$ = new Subject<void>();
  private _dialog = inject(MatDialog);

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialogRouter: FsDialogRouter,
    private _componentFactory: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
    private _injector: Injector,
  ) {}

  public ngOnInit(): void {
    this._listenNavigationEvents();
    this.openDialog();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
    this._dialogRef.close();
  }

  public async openDialog(): Promise<void> {
    const dialogConfig: IFsDialogRouteConfig = { 
      ...this._route.snapshot.data?.fsDialog, 
    };

    if (dialogConfig?.component) {
      this._dialogRef = dialogConfig.component instanceof Promise ? 
        (await this._openLazyDialog(dialogConfig)) : 
        this._openDialog(dialogConfig);

      this._listenDialogClose();
    }
  }

  private _listenNavigationEvents(): void {
    this._router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationStart;
        }),
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this._hasActiveNavigation = true;
      });

    this._router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd;
        }),
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this._hasActiveNavigation = false;
      });
  }

  private _listenDialogClose(): void {
    merge(
      this._dialogRef.afterClosed(),
    )
      .pipe(
        filter(() => !this._hasActiveNavigation),
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this._navigateOutFromDialog();
      });
  }

  private _navigateOutFromDialog(): void {
    const navigationPath = getPathToRouteParent(this._route);

    // Do it!
    this._router
      .navigate([navigationPath], { relativeTo: this._route, queryParamsHandling: 'merge' });
  }

  private async _openLazyDialog(
    dialogConfig: IFsDialogRouteConfig,
  ): Promise<MatDialogRef<unknown, unknown>> {
    const loadedComponent = await dialogConfig.component;
    const componentName = Object.keys(loadedComponent)[0];

    if (!componentName) {
      throw Error('Lazy loading dialog component error! Component not found!');
    }

    const factory = this._componentFactory.resolveComponentFactory(loadedComponent[componentName]);
    dialogConfig.component = factory.componentType;

    return this._openDialog(dialogConfig);
  }

  private _openDialog(routeDialogConfig: IFsDialogRouteConfig): MatDialogRef<unknown, unknown> {
    const dialogComponent = routeDialogConfig.component;
    const dialogConfig = routeDialogConfig.config || {};

    // We dont want to close dialog when navigation happens,
    // because we want to have full control
    dialogConfig.closeOnNavigation = false;
    dialogConfig.viewContainerRef = this._viewContainerRef;
    dialogConfig.injector = this._injector;

    const dialogRef = this._dialog.open(dialogComponent, dialogConfig);

    this._dialogRouter.registerDialog(dialogComponent, dialogRef);

    return dialogRef;
  }

}
