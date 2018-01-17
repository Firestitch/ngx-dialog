import './styles.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsDialogModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    // Angular
    BrowserModule,
    FsDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
