import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsConfirmOptions } from './interfaces';
import { MatDialogConfig } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

enum Prompt_Type {
  confirm = 0,
  input = 1,
  select = 2,
}

@Injectable()
export class FsPromptService {
  private _defaultOptions = {
    title: 'Confirm',
    hint: '',
    'class': '',
    label: '',
    commitLabel: 'Ok',
    cancelLabel: 'Cancel'
  };

  private _defaultModalOptions = {
    width: '250px',
    heigth: 'auto'
  };

  constructor(private dialog: MatDialog) {}

  /**
   * Open confirmation window and return close observable
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   * @returns {Observable<any>}
   */
  public confirm(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = this._defaultModalOptions) {
    const openOptions = Object.assign({}, this._defaultOptions, options);

    return this.open(openOptions, Prompt_Type.confirm, modalOptions);
  }

  /**
   * Open modal dialog depends from type
   *
   * @param {FsConfirmOptions} options
   * @param {Prompt_Type} type
   * @param {MatDialogConfig} modalOptions
   * @returns {any}
   */
  private open(options: FsConfirmOptions, type: Prompt_Type, modalOptions: MatDialogConfig) {
    if (!modalOptions) { modalOptions = {} }

    //Assign panel class (class for modal container) only if we don't have this class in modal options
    if (options.class && !modalOptions.panelClass) {
      modalOptions.panelClass = options.class;
    }

    modalOptions.data = options;

    switch (type) {
      case Prompt_Type.confirm: {
        return this.dialog.open(FsConfirmComponent, modalOptions).afterClosed();
      }

      default: return false;
    }
  }
}
