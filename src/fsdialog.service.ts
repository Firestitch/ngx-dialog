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
   * @property {object} options.style
   * @property {string} options.style.width
   * @property {string} options.style.height
   *
   * @returns {MatDialogRef<FsConfirmComponent>}
   */
  public confirm(options: ConfirmOptions = {}) {
    const defaultStyles = {
      width: '250px',
      height: 'auto'
    };

    const defaultOptions: ConfirmOptions = {
      title: 'Confirm',
      okLabel: 'Yes',
      cancelLabel: 'Cancel',
    };

    let dialogOptions: any = { style: defaultStyles };

    // if we have re-writed style options
    if (options.style) {
      dialogOptions.style = Object.assign({}, defaultStyles, options.style)
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
   * @property {object} options.style
   * @property {string} options.style.width
   * @property {string} options.style.height
   *
   * @returns {MatDialogRef<FsConfirmComponent>}
   */
  private openConfirmDialog(dialogOptions: ConfirmOptions) {
    return this.dialog.open(FsConfirmComponent, {
      width: dialogOptions.style.width,
      height: dialogOptions.style.height,
      data: {
        content: dialogOptions.content,
        title: dialogOptions.title,
        okLabel: dialogOptions.okLabel,
        cancelLabel: dialogOptions.cancelLabel,
      }
    });
  }
}
