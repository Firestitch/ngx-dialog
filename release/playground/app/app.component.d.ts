import { OnInit } from '@angular/core';
import { FsPrompt } from '../../src';
export declare class AppComponent implements OnInit {
    fsDialog: FsPrompt;
    inputValue: string | boolean;
    selectValue: boolean;
    selectAutoValue: boolean;
    constructor(fsDialog: FsPrompt);
    ngOnInit(): void;
    /**
     * Confirm modal
     */
    showConfirm(): void;
    openInput(): void;
    openSelect(): void;
    openAutocomplete(): void;
}
