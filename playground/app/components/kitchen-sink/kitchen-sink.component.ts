import { Component, inject } from '@angular/core';
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
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  public config = environment;
}
