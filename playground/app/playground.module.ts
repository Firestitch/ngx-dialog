import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';
import { FsScrollbarModule } from '@firestitch/scrollbar';
import { FsLabelModule } from '@firestitch/label';
import { ToastrModule } from 'ngx-toastr';
import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BasicComponent, BasicDialogComponent } from './components';
import { FsDialogModule } from 'fs-package';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsFormModule,
    FsLabelModule,
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsMessageModule.forRoot(),
    FsDialogModule.forRoot(),
    FsScrollbarModule.forRoot(),
  ],
  entryComponents: [
    BasicDialogComponent,
    KitchenSinkConfigureComponent
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    BasicDialogComponent,
    KitchenSinkConfigureComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}
