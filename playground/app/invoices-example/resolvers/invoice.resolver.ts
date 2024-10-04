import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { InvoicesService } from '../services/invoices.service';
import { RouteSubject } from '@firestitch/core';


@Injectable({
  providedIn: 'root',
})
export class InvoiceResolver  {

  constructor(private _invoicesService: InvoicesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const routeSubject = new RouteSubject();


    return routeSubject.observe(this._invoicesService.get(+route.params.id));
  }

}
