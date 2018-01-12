import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule, Component, ViewEncapsulation, OnInit, Inject, Input, Output
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsDialogModule, FsPromptService }  from '@firestitch/dialog';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { Subject } from 'rxjs/Subject';


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
  public inputValue: string | boolean = false;
  public selectValue = false;
  public selectAutoValue = false;

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

  public openInput() {
    let dialogRef = this.fsDialog.input({
      hint: 'Use commas to separate multiple email addresses',
      label: 'Please an email adresses',
    });

    dialogRef.subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    })
  }

  public openSelect() {
    let testObservable = new Subject();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 0 },
      { name: 'Mike', value: 1 }
    ];

    // Observable test case
    let testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simpleArray);
        //reject('error')
      }, 3000)
    });

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 3000);

    let dialogRef = this.fsDialog.select({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    });

    dialogRef.subscribe((result: any) => {
      this.selectValue = result;
    })
  }

  public openAutocomplete() {
    let testObservable = new Subject();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 0 },
      { name: 'Mike', value: 1 }
    ];

    // Observable test case
    let testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simpleArray);
        //reject('error')
      }, 3000)
    });

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 3000);

    let dialogRef = this.fsDialog.autocomplete({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    });

    dialogRef.subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
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
