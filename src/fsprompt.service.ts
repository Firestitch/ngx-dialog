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

enum PromptType {
  confirm = 0,
  input = 1,
  select = 2,
  autocomplete = 3
}

export enum ConverterType {
  observable = 0,
  promise = 1,
  array = 2
}

@Injectable()
export class FsPrompt {
  private _defaultConfig = {
    title: '',
    hint: '',
    'class': '',
    label: '',
    commitLabel: 'Ok',
    cancelLabel: 'Cancel'
  };

  private _defaultDialogConfig = {
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
          type: ConverterType.observable,
          values: values
        }
      } else if (!!values && (typeof values === 'object' || typeof values === 'function') // check if it Promise
        && typeof (values as Promise<T>).then === 'function') {
        return {
          type: ConverterType.promise,
          values: values
        }
      } else if (Array.isArray(values)) { // check if it Array
        return {
          type: ConverterType.array,
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
   * @param {FsConfirmOptions} config
   * @param {MatDialogConfig} dialogCofig
   * @returns {Observable<any>}
   */
  public confirm(config: FsConfirmOptions = {}, dialogCofig: MatDialogConfig = void 0) {
    if (dialogCofig === void 0) {
      dialogCofig = Object.assign({}, this._defaultDialogConfig);
      dialogCofig.width = '250px';
    }

    if (dialogCofig.width === void 0) {
      dialogCofig.width = '250px';
    }

    const openOptions = this.getOpenConfig(config);

    if (!openOptions.title) {
      openOptions.title = 'Confirm';
    }

    if (!openOptions.class) {
      openOptions.class = 'fs-modal-confirm'
    }

    return this.open(openOptions, PromptType.confirm, dialogCofig);
  }

  /**
   * Open window with input field for filling
   *
   * @param {FsConfirmOptions} config
   * @param {MatDialogConfig} dialogConfig
   * @returns {Observable<any> | boolean}
   */
  public input(config: FsConfirmOptions = {}, dialogConfig: MatDialogConfig = this._defaultDialogConfig) {
    const openOptions = this.getOpenConfig(config);

    // For this type we don't need title by default
    if (!config.title) {
      openOptions.title = ''
    }

    return this.open(openOptions, PromptType.input, dialogConfig);
  }

  /**
   * Open modal with list
   *
   * @param {FsConfirmOptions} config
   * @param {MatDialogConfig} dialogConfig
   */
  public select(config: FsConfirmOptions = {}, dialogConfig: MatDialogConfig = this._defaultDialogConfig) {
    const openOptions = this.getOpenConfig(config);

    return this.open(openOptions, PromptType.select, dialogConfig);
  }

  /**
   * Open modal with autocomplete
   *
   * @param {FsConfirmOptions} config
   * @param {MatDialogConfig} dialogConfig
   * @returns {Observable<any> | boolean}
   */
  public autocomplete(config: FsConfirmOptions = {}, dialogConfig: MatDialogConfig = this._defaultDialogConfig) {
    const openOptions = this.getOpenConfig(config);

    return this.open(openOptions, PromptType.autocomplete, dialogConfig);
  }

  /**
   * Open modal dialog depends from type
   *
   * @param {FsConfirmOptions} config
   * @param {PromptType} type
   * @param {MatDialogConfig} dialogConfig
   * @returns {any}
   */
  private open(config: FsConfirmOptions, type: PromptType, dialogConfig: MatDialogConfig) {
    if (!dialogConfig) { dialogConfig = {} }

    // Assign panel class (class for modal container) only if we don't have this class in modal options
    if (config.class && !dialogConfig.panelClass) {
      dialogConfig.panelClass = config.class;
    }

    dialogConfig.data = config;

    switch (type) {
      case PromptType.confirm: {
        return this.dialog.open(FsConfirmComponent, dialogConfig).afterClosed();
      }

      case PromptType.input: {
        return this.dialog.open(FsInputComponent, dialogConfig).afterClosed();
      }

      case PromptType.select: {
        return this.dialog.open(FsPromptSelectComponent, dialogConfig).afterClosed();
      }

      case PromptType.autocomplete: {
        return this.dialog.open(FsPromptAutocompleteComponent, dialogConfig).afterClosed();
      }

      default: return false;
    }
  }

  private getOpenConfig(config) {
    return Object.assign({}, this._defaultConfig, config);
  }
}
