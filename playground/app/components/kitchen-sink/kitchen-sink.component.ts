import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './kitchen-sink.component.html',
  styleUrls: [
    './kitchen-sink.component.scss',
  ],
})
export class KitchenSinkComponent {
  public config = environment;

  constructor(private _router: Router, private _route: ActivatedRoute) {}
}
