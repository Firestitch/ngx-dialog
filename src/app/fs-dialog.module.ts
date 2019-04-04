import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsDialogComponent } from './components/fs-dialog/fs-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FsDialogComponent,
  ],
  exports: [
    FsDialogComponent,
  ],
  entryComponents: [
  ]
})
export class FsDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDialogModule,
      providers: [
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: {
            panelClass: 'fs-dialog-backdrop',
            maxWidth: '95vw',
            disableClose: false,
            minWidth: '400px',
            autoFocus: true,
            hasBackdrop: true
          }
        }
      ]
    };
  }
}
