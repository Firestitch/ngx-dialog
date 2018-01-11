import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsDialogService } from './fsdialog.service';
import { FsDialogComponent } from './fsdialog.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Dialog
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsModalWrapperComponent } from './fs-modal-wrapper/fs-modal-wrapper.component';

export * from './fsdialog.service';
export * from './fsdialog.component';
export * from './fs-confirm/index';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Material
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [
    FsConfirmComponent,
    FsModalWrapperComponent,
  ],
  declarations: [
    FsDialogComponent,
    FsConfirmComponent,
    FsModalWrapperComponent,
  ],
  providers: [
    FsDialogService,
  ],
  exports: [
    FsDialogComponent,
  ]
})
export class FsDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDialogModule,
      providers: [FsDialogService]
    };
  }
}
