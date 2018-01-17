import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
export interface IFsPromptConfig {
    title?: string;
    template?: string;
    hint?: string;
    label?: string;
    class?: string;
    commitLabel?: string;
    cancelLabel?: string;
    values?: FsValuesFunction;
    dialogConfig?: MatDialogConfig;
}
export interface FsValuesFunction {
    <T>(): Observable<T> | Promise<T> | T[];
}
