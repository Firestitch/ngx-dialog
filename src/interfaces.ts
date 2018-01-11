import { MatDialogConfig } from '@angular/material/dialog';

export interface ConfirmOptions {
  title?: string,
  content?: string,
  okLabel?: string,
  cancelLabel?: string
  modalOptions?: MatDialogConfig
}
