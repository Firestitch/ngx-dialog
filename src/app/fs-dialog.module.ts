import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

import { FsDialogRouteComponent } from './components/route/route.component';
import { FsDialogComponent, FsDialogTitleComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FsDialogSubtitleDirective } from './directives';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    FsDialogComponent,
    FsDialogRouteComponent,
    FsDialogTitleComponent,
    FsDialogSubtitleDirective,
  ],
  exports: [
    MatDialogModule,
    FsDialogComponent,
    FsDialogTitleComponent,
    FsDialogRouteComponent,
    FsDialogSubtitleDirective,
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
