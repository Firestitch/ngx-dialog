import {
  Injectable, ViewContainerRef, ComponentRef, Type,
  ComponentFactoryResolver
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsConfirmOptions } from './interfaces';
import { MatDialogConfig } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { FsDialogComponent } from './fsdialog.component';
import { FsInputComponent } from './fs-input/fs-input.component';

enum Prompt_Type {
  confirm = 0,
  input = 1,
  select = 2,
}

@Injectable()
export class FsPromptService {
  private _defaultOptions = {
    title: '',
    hint: '',
    'class': '',
    label: '',
    commitLabel: 'Ok',
    cancelLabel: 'Cancel'
  };

  private _defaultModalOptions = {
    width: 'auto',
    heigth: 'auto'
  };

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private dialog: MatDialog
  ) {}

  /**
   * Open confirmation window and return close observable
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   * @returns {Observable<any>}
   */
  public confirm(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = this._defaultModalOptions) {
    const openOptions = this.getOpenOptions(options);

    if (!openOptions.title) {
      openOptions.title = 'Confirm';
    }

    if (!openOptions.class) {
      openOptions.class = 'fs-modal-confirm'
    }

    // For this type we need default width at least 250px
    if (!modalOptions.width || modalOptions.width === 'auto') {
      modalOptions.width = '250px'
    }

    return this.open(openOptions, Prompt_Type.confirm, modalOptions);
  }

  /**
   * Open window with input field for filling
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   * @returns {Observable<any> | boolean}
   */
  public input(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = this._defaultModalOptions) {
    const openOptions = this.getOpenOptions(options);

    // For this type we need default width at least 500px
    if (!modalOptions.width || modalOptions.width === 'auto') {
      modalOptions.width = '500px'
    }

    // For this type we don't need title by default
    if (!options.title) {
      openOptions.title = ''
    }

    return this.open(openOptions, Prompt_Type.input, modalOptions);
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

    // Assign panel class (class for modal container) only if we don't have this class in modal options
    if (options.class && !modalOptions.panelClass) {
      modalOptions.panelClass = options.class;
    }

    modalOptions.data = options;

    switch (type) {
      case Prompt_Type.confirm: {
        return this.dialog.open(FsConfirmComponent, modalOptions).afterClosed();
      }

      case Prompt_Type.input: {
        return this.dialog.open(FsInputComponent, modalOptions).afterClosed();
      }

      default: return false;
    }
  }

  private getOpenOptions(options) {
    return Object.assign({}, this._defaultOptions, options);
  }
}
