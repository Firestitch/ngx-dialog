import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { fsDialogRoute } from 'fs-package';

import { InvoiceComponent } from './components/invoice';
import { InvoicesComponent } from './components/invoices';
import { InvoiceResolver } from './resolvers/invoice.resolver';

const routes: Route[] = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      fsDialogRoute(
        {
          path: 'invoices/:id',
          component: InvoiceComponent,
          data: {},
          resolve: {
            invoice: InvoiceResolver,
          },
        },
      ),
      /*{
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
      },*/
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class InvoicesRoutingModule {}
