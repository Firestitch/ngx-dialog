import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

import { FsDialogComponent } from './components/fs-dialog/fs-dialog.component';
import { FsDialogRouteComponent } from './components/route/route.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FsDialogComponent,
    FsDialogRouteComponent,
  ],
  exports: [
    MatDialogModule,
    FsDialogComponent,
    FsDialogRouteComponent,
  ]
})
export class FsDialogModule {
  public static forRoot(): ModuleWithProviders<FsDialogModule> {
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
        },
      ]
    };
  }
}
