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
            panelClass: 'fs-dialog-overlay-pane',
            maxWidth: '95vw',
            disableClose: false,
            autoFocus: true,
            hasBackdrop: true
          }
        }
      ]
    };
  }
}
