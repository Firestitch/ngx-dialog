import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FsDialogRouteComponent } from 'fs-package';

import { InvoicesComponent } from './components/invoices';
import { InvoiceComponent } from './components/invoice';
import { InvoiceResolver } from './resolvers/invoice.resolver';

const routes: Route[] = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: 'invoices/:id',
        component: FsDialogRouteComponent,
        resolve: {
          invoice: InvoiceResolver,
        },
        data: {
          fsDialog: {
            component: InvoiceComponent,
            config: { // MatDialogConfig interface
              width: '300px',
              data: {}
            },
          }
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class InvoicesRoutingModule {}
