import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class FsPromptSelectComponent implements OnInit {
    dialogRef: MatDialogRef<FsPromptSelectComponent>;
    data: any;
    result: any;
    loading: boolean;
    items: any[];
    error: boolean;
    constructor(dialogRef: MatDialogRef<FsPromptSelectComponent>, data: any);
    ngOnInit(): void;
    complete(): void;
    private loadItems();
}
