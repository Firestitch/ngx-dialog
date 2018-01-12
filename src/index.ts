import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsPromptService } from './fsprompt.service';
import { FsDialogComponent } from './fsdialog.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Dialog
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';

export * from './fsprompt.service';
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
  ],
  declarations: [
    FsDialogComponent,
    FsConfirmComponent,
  ],
  providers: [
    FsPromptService,
  ],
  exports: [
    FsDialogComponent,
  ]
})
export class FsDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDialogModule,
      providers: [FsPromptService]
    };
  }
}
