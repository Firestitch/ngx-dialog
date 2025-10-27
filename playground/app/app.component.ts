import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
import { CloseExampleComponent } from './components/close-example/close-example.component';
import { BackExampleComponent } from './components/back-example/back-example.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, BasicExampleComponent, CloseExampleComponent, BackExampleComponent, NavigationComponent]
})
export class AppComponent {
  public config = environment;

}
