import { MatDialogConfig } from '@angular/material/dialog';
import { FsValuesFunction } from './fs-values-function';

export interface IFsPromptConfig {
  title?: string;
  template?: string;
  hint?: string;
  label?: string;
  class?: string | string[];
  commitLabel?: string;
  cancelLabel?: string;
  commitShow?: boolean;
  cancelShow?: boolean;  
  values?: FsValuesFunction;
  dialogConfig?: MatDialogConfig;
}