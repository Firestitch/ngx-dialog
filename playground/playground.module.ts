import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import {  BasicComponent,
          BasicDialogComponent } from './app/components';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    FsFormModule
  ],
  entryComponents: [
    BasicDialogComponent
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    BasicDialogComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
