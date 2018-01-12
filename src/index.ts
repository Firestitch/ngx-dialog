import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FsPromptService } from './fsprompt.service';
import { FsDialogComponent } from './fsdialog.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Dialog
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsInputComponent } from './fs-input/fs-input.component';

export * from './fsprompt.service';
export * from './fsdialog.component';
export * from './fs-confirm/index';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    FsConfirmComponent,
    FsInputComponent,
  ],
  declarations: [
    FsDialogComponent,
    FsConfirmComponent,
    FsInputComponent,
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
