import { MatDialogConfig } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export interface ConfirmOptions {
  title?: string;
  content?: string;
  okLabel?: string;
  cancelLabel?: string;
  modalOptions?: MatDialogConfig;
}

export interface ShowOptions<T> {
  title?: string;
  component: ComponentType<T> | TemplateRef<T>;
  okLabel?: string;
  cancelLabel?: string;
  modalOptions?: MatDialogConfig;
  confirm?: {
    title?: string;
    message: string;
    okLabel?: string;
    cancelLabel?: string;
  };
}

export interface FsModal {
  resultData: any;
  needConfirmation: boolean;
}
