import {
  Injectable,
} from '@angular/core';

// Modal
import { MatDialog } from '@angular/material/dialog';
import { FsConfirmOptions, FsValuesFunction } from './interfaces';
import { MatDialogConfig } from '@angular/material';

// Components for open in modal
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsInputComponent } from './fs-input/fs-input.component';
import { FsPromptSelectComponent } from './fs-prompt-select/fs-prompt-select.component';
import { FsPromptAutocompleteComponent } from './fs-prompt-autocomplete/fs-prompt-autocomplete.component';

// RX
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

enum Prompt_Type {
  confirm = 0,
  input = 1,
  select = 2,
  autocomplete = 3
}

export enum Converter_Type {
  observable = 0,
  promise = 1,
  array = 2
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
    width: '500px',
    heigth: 'auto'
  };

  /**
   * Values converter
   *
   * @param {Observable<T> | Promise<T> | Array<T> | FsValuesFunction} values
   * @returns {any}
   */
  static valuesConverter<T>(values: Observable<T> | Promise<T> | Array<T> | FsValuesFunction) {
    const nativeObjectToString = Object.prototype.toString;

    if (nativeObjectToString.call(values) === '[object Function]') { // check if it Function
      return this.valuesConverter((values as Function)())
    } else {
      if (values instanceof Observable) { // check if it Observable
        return {
          type: Converter_Type.observable,
          values: values
        }
      } else if (!!values && (typeof values === 'object' || typeof values === 'function') // check if it Promise
        && typeof (values as Promise<T>).then === 'function') {
        return {
          type: Converter_Type.promise,
          values: values
        }
      } else if (Array.isArray(values)) { // check if it Array
        return {
          type: Converter_Type.array,
          values: values
        }
      } else { // if we can't detect type
        return false;
      }
    }
  }

  constructor(private dialog: MatDialog) {}

  /**
   * Open confirmation window and return close observable
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   * @returns {Observable<any>}
   */
  public confirm(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = void 0) {
    if (modalOptions === void 0) {
      modalOptions = Object.assign({}, this._defaultModalOptions);
      modalOptions.width = '250px';
    }

    if (modalOptions.width === void 0) {
      modalOptions.width = '250px';
    }

    const openOptions = this.getOpenOptions(options);

    if (!openOptions.title) {
      openOptions.title = 'Confirm';
    }

    if (!openOptions.class) {
      openOptions.class = 'fs-modal-confirm'
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

    // For this type we don't need title by default
    if (!options.title) {
      openOptions.title = ''
    }

    return this.open(openOptions, Prompt_Type.input, modalOptions);
  }

  /**
   * Open modal with list
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   */
  public select(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = this._defaultModalOptions) {
    const openOptions = this.getOpenOptions(options);

    return this.open(openOptions, Prompt_Type.select, modalOptions);
  }

  /**
   * Open modal with autocomplete
   *
   * @param {FsConfirmOptions} options
   * @param {MatDialogConfig} modalOptions
   * @returns {Observable<any> | boolean}
   */
  public autocomplete(options: FsConfirmOptions = {}, modalOptions: MatDialogConfig = this._defaultModalOptions) {
    const openOptions = this.getOpenOptions(options);

    return this.open(openOptions, Prompt_Type.autocomplete, modalOptions);
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

      case Prompt_Type.select: {
        return this.dialog.open(FsPromptSelectComponent, modalOptions).afterClosed();
      }

      case Prompt_Type.autocomplete: {
        return this.dialog.open(FsPromptAutocompleteComponent, modalOptions).afterClosed();
      }

      default: return false;
    }
  }

  private getOpenOptions(options) {
    return Object.assign({}, this._defaultOptions, options);
  }
}
