import { MatDialogConfig } from '@angular/material';
import { FsValuesFunction } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { IFsPromptConfig } from '../interfaces';
export declare class FsPromptConfig<T> {
    config: IFsPromptConfig;
    title: string;
    template: string;
    hint: string;
    label: string;
    class: string;
    commitLabel: string;
    cancelLabel: string;
    values: Observable<T> | Promise<T> | T[] | FsValuesFunction;
    protected _dialogConfig: MatDialogConfig;
    protected _defaultDialogConfig: {
        width: string;
        heigth: string;
    };
    constructor(config: IFsPromptConfig);
    readonly dialogConfig: MatDialogConfig<any>;
    protected applyConfig(config: IFsPromptConfig): void;
    protected applyDialogConfig(config: IFsPromptConfig): void;
}
