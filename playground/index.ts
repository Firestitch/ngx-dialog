import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule, Component, ViewEncapsulation, OnInit, Inject, Input, Output
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsDialogModule, FsPromptService }  from '@firestitch/dialog';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'example-modal',
  templateUrl: 'example-modal.component.html'
})
export class ExampleModalComponent {
  constructor() {
  }
}

@Component({
  selector: 'confirm-example-modal',
  templateUrl: 'confirm-example-modal.component.html'
})
export class ConfirmExampleModalComponent {
  @Input() data: any;

  constructor() {
  }

  @Output()
  get needConfirmation() {
    return true;
  }

  @Output()
  get resultData() {
    return {}
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  providers: [ FsPromptService, ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent implements OnInit {
  constructor(public fsDialog: FsPromptService) {}

  public ngOnInit() {
  }

  /**
   * Confirm modal
   */
  public showConfirm() {
    let dialogRef = this.fsDialog.confirm({
      title: 'Confirm',
      template: 'Are you sure?',
    });


    dialogRef.subscribe((result: boolean) => {
      if (result) {
        alert('Ok');
      } else {
        alert('Cancel');
      }
    });

  }

  // public openModal() {
  //   this.fsDialog.show({
  //     component: ExampleModalComponent,
  //     title: 'Test modal',
  //   });
  // }
  //
  // public openConfirmModal() {
  //   this.fsDialog.show({
  //     component: ConfirmExampleModalComponent,
  //     title: 'Test modal',
  //     confirm: {
  //       message: 'You have unsaved changes.',
  //       okLabel: 'Ok',
  //       cancelLabel: 'Cancel'
  //     }
  //   });
  // }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ExampleModalComponent,
    ConfirmExampleModalComponent,
  ],
  entryComponents: [
    ExampleModalComponent,
    ConfirmExampleModalComponent
  ],
  imports: [ BrowserModule, FsDialogModule, BrowserAnimationsModule, MatButtonModule, MatDialogModule, ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
