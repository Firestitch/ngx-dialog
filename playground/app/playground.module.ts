import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsScrollbarModule } from '@firestitch/scrollbar';

import { DialogConfig, FS_DAILOG_CONFIG, FsDialogModule } from 'fs-package';

import { AppComponent } from './app.component';
import { BasicDialogComponent, NavigationComponent } from './components';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { AppMaterialModule } from './material.module';

import { BasicExampleComponent } from './components/basic-example';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsFormModule,
    FlexLayoutModule,
    FsLabelModule,
    MatDialogModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    FsDialogModule.forRoot(),
    FsScrollbarModule.forRoot(),
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
    KitchenSinkConfigureComponent,
    KitchenSinkComponent,
  ],
  providers: [
    {
      provide: FS_DAILOG_CONFIG,
      useValue: {
        mobileMode: 'peek',
        mobileActionPlacement: 'bottom',
      } as DialogConfig
    }
  ]
})
export class PlaygroundModule {
}
