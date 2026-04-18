import { ModuleWithProviders, NgModule } from '@angular/core';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


import { FsDialogComponent, FsDialogRouteComponent, FsDialogTitleComponent } from './components';
import {
  FsDialogSubtitleDirective, FsDialogSupertitleDirective, FsDialogTitleDirective,
} from './directives';


@NgModule({
  imports: [
    FsDialogComponent,
    FsDialogRouteComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
    FsDialogSupertitleDirective,
    FsDialogTitleDirective,
  ],
  exports: [
    FsDialogComponent,
    FsDialogRouteComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
    FsDialogSupertitleDirective,
    FsDialogTitleDirective,
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
