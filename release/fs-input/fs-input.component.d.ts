import { MatDialogRef } from '@angular/material/dialog';
export declare class FsInputComponent {
    dialogRef: MatDialogRef<FsInputComponent>;
    data: any;
    inputValue: string;
    constructor(dialogRef: MatDialogRef<FsInputComponent>, data: any);
    complete(): void;
}
