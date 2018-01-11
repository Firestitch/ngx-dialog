import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsDialogService } from './fsdialog.service';
import { FsDialogComponent } from './fsdialog.component';

export * from './fsdialog.service';
export * from './fsdialog.component';

@NgModule({
  imports: [
    CommonModule,
],
declarations: [
    FsDialogComponent
],
providers: [
    FsDialogService
],
exports: [
    FsDialogComponent
]
})
export class FsDialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDialogModule,
      providers: [ FsDialogService ]
    };
  }
}
