import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Dialog
import { FsConfirmComponent } from './fs-confirm/fs-confirm.component';
import { FsInputComponent } from './fs-input/fs-input.component';
import { FsPromptSelectComponent } from './fs-prompt-select/fs-prompt-select.component';
import { FsPrompt } from './fsprompt.service';
import { FsPromptAutocompleteComponent } from './fs-prompt-autocomplete/fs-prompt-autocomplete.component';

export * from './fsprompt.service';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  entryComponents: [
    FsConfirmComponent,
    FsInputComponent,
    FsPromptSelectComponent,
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsConfirmComponent,
    FsInputComponent,
    FsPromptSelectComponent,
    FsPromptAutocompleteComponent,
  ],
  providers: [
    FsPrompt,
  ],
})
export class FsDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDialogModule,
      providers: [FsPrompt]
    };
  }
}
