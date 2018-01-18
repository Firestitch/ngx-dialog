import { OnInit } from '@angular/core';
import { FsPrompt } from '../../src';
export declare class AppComponent implements OnInit {
    fsPrompt: FsPrompt;
    inputValue: string | boolean;
    selectValue: boolean;
    selectAutoValue: boolean;
    constructor(fsPrompt: FsPrompt);
    ngOnInit(): void;
    /**
     * Confirm modal
     */
    showConfirm(): void;
    openInput(): void;
    openSelect(): void;
    openAutocomplete(): void;
}
