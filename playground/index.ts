import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FsDialogModule, FsDialogService }  from '@firestitch/dialog';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  providers: [ FsDialogService, ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent implements OnInit {
  constructor(public fsDialog: FsDialogService) {}

  public ngOnInit() {
  }

  public showConfirm() {
    let dialogRef = this.fsDialog.confirm({
      title: 'Title',
      content: 'Are you sure?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        alert('Ok');
      } else {
        alert('Cancel');
      }
    });

  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsDialogModule, BrowserAnimationsModule, MatButtonModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
