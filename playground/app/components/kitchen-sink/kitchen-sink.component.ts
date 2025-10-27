import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FsExampleModule } from '@firestitch/example';
import { BasicExampleComponent } from '../basic-example/basic-example.component';


@Component({
    templateUrl: './kitchen-sink.component.html',
    styleUrls: [
        './kitchen-sink.component.scss',
    ],
    standalone: true,
    imports: [FsExampleModule, BasicExampleComponent],
})
export class KitchenSinkComponent {
  public config = environment;

  constructor(private _router: Router, private _route: ActivatedRoute) {}
}
