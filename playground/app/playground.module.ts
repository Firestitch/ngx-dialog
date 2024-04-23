import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';

import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsScrollbarModule } from '@firestitch/scrollbar';

import { DialogConfig, FS_DAILOG_CONFIG, FsDialogModule } from 'fs-package';

import { AppComponent } from './app.component';
import { BasicDialogComponent, CloseDialogComponent, CloseExampleComponent, KitchenSinkComponent, NavigationComponent } from './components';
import { AppMaterialModule } from './material.module';

import { BasicExampleComponent } from './components/basic-example';
import { CommonModule } from '@angular/common';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    
    MatDialogModule,
    
    FsFormModule,
    FsLabelModule,
    FsDialogModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    FsScrollbarModule.forRoot(),
    
    AppMaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./invoices-example/invoices.module').then(m => m.InvoicesModule),
      },
    ]),
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    BasicDialogComponent,
    BasicExampleComponent,
    KitchenSinkComponent,
    CloseExampleComponent,
    CloseDialogComponent,
  ],
  providers: [
    {
      provide: FS_DAILOG_CONFIG,
      useValue: {
        mobileMode: 'full',
        mobileButtonPlacement: 'bottom',
      } as DialogConfig
    }
  ]
})
export class PlaygroundModule {
}
