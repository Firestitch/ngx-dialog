import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { ConfirmOptions } from './interfaces';

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
