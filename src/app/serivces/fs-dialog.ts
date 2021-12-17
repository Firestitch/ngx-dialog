import { Injectable, Type } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { ComponentType } from '@angular/cdk/portal';

import { Observable } from 'rxjs';

import { FsDialogRouter } from './fs-dialog-router';


@Injectable({
  providedIn: 'root',
})
export class FsDialog {

  constructor(private _dialogRouter: FsDialogRouter) {}

  public open<T, D = any, R = any>(component: ComponentType<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this._dialogRouter.openDialog<T, D, R>(component, config);
  }

  public navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this._dialogRouter.navigate(commands, extras);
  }

  public dialogRef$<T, R = any>(component: ComponentType<T>): Observable<MatDialogRef<T, R> | undefined> {
    return this._dialogRouter.dialogRef$(component);
  }

}
