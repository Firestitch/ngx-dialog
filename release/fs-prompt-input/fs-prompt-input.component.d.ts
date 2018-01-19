import { MatDialogRef } from '@angular/material/dialog';
export declare class FsPromptInputComponent {
    dialogRef: MatDialogRef<FsPromptInputComponent>;
    data: any;
    inputValue: string;
    constructor(dialogRef: MatDialogRef<FsPromptInputComponent>, data: any);
    complete(): void;
}
