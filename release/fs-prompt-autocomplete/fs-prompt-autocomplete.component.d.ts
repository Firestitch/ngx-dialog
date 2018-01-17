import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { MatAutocompleteSelectedEvent } from '@angular/material';
export declare class FsPromptAutocompleteComponent implements OnInit {
    dialogRef: MatDialogRef<FsPromptAutocompleteComponent>;
    data: any;
    inputControl: FormControl;
    filteredItems: Observable<any[]>;
    result: any;
    loading: boolean;
    items: any[];
    error: boolean;
    constructor(dialogRef: MatDialogRef<FsPromptAutocompleteComponent>, data: any);
    ngOnInit(): void;
    complete(): void;
    setSelectedValue(event: MatAutocompleteSelectedEvent): void;
    displayWith(value: any): any;
    /**
     * Load items depend from values type
     */
    private loadItems();
    /**
     * Filter items by name
     * @param {string} name
     * @returns {any[]}
     */
    private filterItems(name);
}
