import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { ConfirmOptions, ShowOptions } from './interfaces';
import { FsModalWrapperComponent } from './fs-modal-wrapper/fs-modal-wrapper.component';

@Injectable()
export class FsDialogService {
  constructor(private dialog: MatDialog) {}

  /**
   * Open confirm dialog component, merge options with default and return dialogRef
   *
   * @param {ConfirmOptions} options
   * @property {string} options.title
   * @property {string} options.content
   * @property {string} options.okLabel
   * @property {string} options.cancelLabel
   * @property {MatDialogConfig} options.modalOptions - config for material modal dialog
   *
   * @returns {MatDialogRef<FsConfirmComponent>}
   */
  public confirm(options: ConfirmOptions = {}) {
    const defaultModalOptions = {
      width: '250px',
      height: 'auto'
    };

    const defaultOptions: ConfirmOptions = {
      title: 'Confirm',
      okLabel: 'Yes',
      cancelLabel: 'Cancel',
    };

    let dialogOptions: any = { style: defaultModalOptions };

    // if we have re-writed style options
    if (options.modalOptions) {
      dialogOptions.style = Object.assign({}, defaultModalOptions, options.modalOptions)
    }

    // Build final dialog options
    dialogOptions = Object.assign(defaultOptions, options, dialogOptions);

    return this.openConfirmDialog(dialogOptions);
  }

  /**
   * Show modal dialog with or without confirmation
   *
   * @param {ShowOptions<T>} options
   * @param {string} options.title
   * @param {ComponentType<T> | TemplateRef<T>} options.component
   * @param {string} options.okLabel
   * @param {string} options.cancelLabel
   * @param {MatDialogConfig} options.modalOptions
   * @param {object} options.confirm
   * 
   * @returns {MatDialogRef<FsModalWrapperComponent>}
   */
  public show<T>(options: ShowOptions<T>) {
    if (!options.component) { throw 'Incorrect argument passed to FsDialogService.show. Component required.'}

    let modalOptions = options.modalOptions && Object.assign(options.modalOptions) || {};

    modalOptions.data = {
      component: options.component,
      title: options.title || false,
      okLabel: options.okLabel || 'Ok',
      cancelLabel: options.cancelLabel || 'Cancel',
    };

    if (options.confirm && options.confirm.message) {
      modalOptions.data.confirm = {
        title: options.confirm.title || 'Confirm',
        message: options.confirm.message,
        okLabel: options.confirm.okLabel,
        cancelLabel: options.confirm.cancelLabel,
      };
    }

    return this.dialog.open(FsModalWrapperComponent, modalOptions);
  }


  /**
   * Open MatDialog with confirm component and return dialogRef

   * @param {ConfirmOptions} dialogOptions
   * @property {string} options.title
   * @property {string} options.content
   * @property {string} options.okLabel
   * @property {string} options.cancelLabel
   * @property {MatDialogConfig} options.modalOptions - config for material modal dialog
   *
   * @returns {MatDialogRef<FsConfirmComponent>}
   */
  private openConfirmDialog(dialogOptions: ConfirmOptions) {
    // Check if we have defined modal options (options for material modal) and incapsulate it
    let modalOptions = dialogOptions.modalOptions && Object.assign(dialogOptions.modalOptions) || {};

    modalOptions['data'] = {
      content: dialogOptions.content,
      title: dialogOptions.title,
      okLabel: dialogOptions.okLabel,
      cancelLabel: dialogOptions.cancelLabel,
    };

    return this.dialog.open(FsConfirmComponent, modalOptions);
  }
}
