import { inject, Injectable, Type } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class FsDialogRouter {

  private _activeDialogs: WeakMap<Type<any>, MatDialogRef<unknown>> = new WeakMap();
  private _dialogOpened$ = new BehaviorSubject<void>(null);
  private _router = inject(Router);
  private _dialog = inject(MatDialog);

  public navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this._router.navigate(commands, extras);
  }

  public openDialog<T, D = any, R = any>(
    component: ComponentType<T>, 
    config?: MatDialogConfig<D>,
  ): MatDialogRef<T, R> {
    const dialog = this._dialog
      .open<T, D, R>(component, config);

    this.registerDialog(component, dialog);

    return dialog;
  }

  public dialogRef$(component: Type<any>): Observable<MatDialogRef<any>> {
    return this._dialogOpened$
      .pipe(
        filter(() => {
          return this._activeDialogs.has(component);
        }),
        map(() => this._activeDialogs.get(component)),
      );
  }

  public registerDialog(component: Type<any>, ref: MatDialogRef<unknown, unknown>): void {
    if (!this._activeDialogs.has(component)) {
      this._activeDialogs.set(component, ref);

      this._listenDialogClose(component, ref);

      this._dialogOpened$.next(null);
    }
  }

  private _listenDialogClose(component: Type<any>, ref: MatDialogRef<unknown, unknown>): void {
    ref.afterClosed()
      .pipe(
        take(1),
      )
      .subscribe(() => {
        this._activeDialogs.delete(component);
      });

  }
}
