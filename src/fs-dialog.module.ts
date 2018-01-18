import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
} from '@angular/material';

// Dialog
import { FsPromptConfirmComponent } from './fs-prompt-confirm';
import { FsPromptInputComponent } from './fs-prompt-input';
import { FsPromptSelectComponent } from './fs-prompt-select';
import { FsPrompt } from './fsprompt.service';
import { FsPromptAutocompleteComponent } from './fs-prompt-autocomplete';


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
    FsPromptConfirmComponent,
    FsPromptInputComponent,
    FsPromptSelectComponent,
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsPromptConfirmComponent,
    FsPromptInputComponent,
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
