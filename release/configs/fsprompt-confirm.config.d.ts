import { FsPromptConfig } from './fsprompt.config';
import { IFsPromptConfig } from '../interfaces';
export declare class FsPromptConfirmConfig<T> extends FsPromptConfig<T> {
    protected applyConfig(config: any): void;
    protected applyDialogConfig(config: IFsPromptConfig): void;
}
