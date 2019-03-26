import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';
import { ToastrModule } from 'ngx-toastr';
import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BasicComponent, BasicDialogComponent } from './components';
import { FsDialogModule } from '../../src/app/fs-dialog.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsFormModule,
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsMessageModule.forRoot(),
    FsDialogModule.forRoot()
  ],
  entryComponents: [
    BasicDialogComponent
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    BasicDialogComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}
