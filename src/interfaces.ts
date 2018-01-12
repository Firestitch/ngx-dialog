import { MatDialogConfig } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';

export interface FsConfirmOptions {
  title?: string;
  template?: string;
  hint?: string;
  label?: string;
  class?: string;
  commitLabel?: string;
  cancelLabel?: string;
  values?: Observable<any>
}
