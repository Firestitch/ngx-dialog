import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { InvoicesService } from '../services/invoices.service';
import { RouteSubject } from '@firestitch/core';


@Injectable({
  providedIn: 'root',
})
export class InvoiceResolver  {
  private _invoicesService = inject(InvoicesService);


  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const routeSubject = new RouteSubject();


    return routeSubject.observe(this._invoicesService.get(+route.params.id));
  }

}
