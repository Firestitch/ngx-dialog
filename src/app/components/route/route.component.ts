import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { FsDialogRouter } from '../../serivces/fs-dialog-router';
import { IFsDialogRouteConfig } from '../../interfaces/route-data.interface';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class FsDialogRouteComponent implements OnInit, OnDestroy {

  private _dialog: MatDialogRef<unknown, unknown>;
  private _hasActiveNavigation = false;
  private _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialogRouter: FsDialogRouter,
    private _componentFactory: ComponentFactoryResolver,
    private _viewContainerRef?: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this._listenNavigationEvents();
    this.openDialog();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public async openDialog(): Promise<void> {
    const dialogConfig: IFsDialogRouteConfig = { ...this._route.snapshot.data?.fsDialog };

    if (dialogConfig?.component) {
      if (dialogConfig.component instanceof Promise) {
        this._dialog = await this._openLazyDialog(dialogConfig);
      } else {
        this._dialog = this._openDialog(dialogConfig);
      }

      this._listenDialogClose();
    }
  }

  private _listenNavigationEvents(): void {
    this._router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationStart
        }),
        takeUntil(this._destroy$),
      )
      .subscribe((event) => {
        this._hasActiveNavigation = true;
      });

    this._router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd
        }),
        takeUntil(this._destroy$),
      )
      .subscribe((event) => {
        this._hasActiveNavigation = false;
      })
  }

  private _listenDialogClose(): void {
    merge(
      this._dialog.afterClosed(),
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
    let stepsBack = 0;
    let route = this._route.parent;

    // we are looking for parent route to navigate from current dialog
    // but we have to skip routes like loadChildren or redirectTo
    // because it does not make sence to do navigation to them
    while (route.routeConfig && (route.routeConfig.redirectTo || route.routeConfig.path === '') && route.parent) {
      stepsBack++;
      route = route.parent;
    }

    // make relative navigation path like '../../../';
    const navigationPath = Array
      .from(Array(stepsBack), () => '../')
      .join('');

    // Do it!
    this._router.navigate([navigationPath], { relativeTo: this._route });
  }

  private async _openLazyDialog(dialogConfig: IFsDialogRouteConfig): Promise<MatDialogRef<unknown, unknown>> {
    const loadedComponent = await dialogConfig.component;
    const componentName = Object.keys(loadedComponent)[0];

    if (!componentName) {
      throw Error('Lazy loading dialog component error! Component not found!')
    }

    const factory = this._componentFactory.resolveComponentFactory(loadedComponent[componentName])
    dialogConfig.component = factory.componentType;

    return this._openDialog(dialogConfig);
  }

  private _openDialog(routeDialogConfig: IFsDialogRouteConfig): MatDialogRef<unknown, unknown> {
    const {component: dialogComponent, ...dialogConfig}:
      { component: ComponentType<unknown> } & MatDialogConfig<unknown> = routeDialogConfig;

    dialogConfig.viewContainerRef = this._viewContainerRef;

    return this._dialogRouter.openDialogForRoute(dialogComponent, dialogConfig);
  }

}
