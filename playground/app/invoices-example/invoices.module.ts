import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FsFormModule } from '@firestitch/form';
import { FsListModule } from '@firestitch/list';
import { FS_TASK_CONFIG, TaskConfig } from '@firestitch/task';

import { FsDialogModule } from 'fs-package';

import { InvoiceComponent } from './components/invoice';
import { InvoicesComponent } from './components/invoices';
import { InvoicesRoutingModule } from './invoices-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FsListModule,
    FsFormModule,

    InvoicesRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule,

    FsDialogModule,
    
  ],
  declarations: [
    InvoicesComponent,
    InvoiceComponent,
  ],
  providers: [
    {
      provide: FS_TASK_CONFIG,
      useValue: {
        commentPlaceholder: 'Test!!!',
      } as TaskConfig,
    },
  ],
})
export class InvoicesModule {}
