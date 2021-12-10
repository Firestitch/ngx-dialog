import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsFormModule } from '@firestitch/form';
import { FsListModule } from '@firestitch/list';
import { FsDialogModule } from 'fs-package';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './components/invoices';
import { InvoiceComponent } from './components/invoice';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FsListModule,
    FsDialogModule,
    FsFormModule,

    InvoicesRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexModule,
  ],
  declarations: [
    InvoicesComponent,
    InvoiceComponent,
  ],
})
export class InvoicesModule {}
