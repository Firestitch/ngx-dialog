import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { FsMenuModule } from '@firestitch/menu';

import { FsDialogComponent, FsDialogTitleComponent } from './components';
import { FsDialogSubtitleDirective, FsDialogSupertitleDirective } from './directives';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    FsMenuModule,
  ],
  declarations: [
    FsDialogComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
    FsDialogSupertitleDirective,
  ],
  exports: [
    FsDialogComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
    FsDialogSupertitleDirective,
  ],
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
            hasBackdrop: true,
          },
        },
      ],
    };
  }
}
