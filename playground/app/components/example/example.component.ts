import { Component } from '@angular/core';
import { FsPrompt } from '../../../../src';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  public inputValue: string | boolean = false;
  public selectValue = false;
  public confirmValue = '';
  public selectAutoValue = false;

  constructor(public fsPrompt: FsPrompt) {}

  /**
   * Confirm modal
   */
  public showConfirm() {
    this.fsPrompt.confirm({
      title: 'Confirm',
      template: 'Are you sure?'
    }).subscribe(() => {
      this.confirmValue = 'Ok';
    }, (error: any) => {
      this.confirmValue = 'Cancel';
    });

  }

  public openInput() {
    this.fsPrompt.input({
      hint: 'Use commas to separate multiple email addresses',
      label: 'Please an email adresses',
    }).subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    })
  }

  public openSelect() {
    let testObservable = new Subject<any>();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 'dave'},
      { name: 'Mike', value: 'mike' }
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this.fsPrompt.select({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectValue = result;
    })
  }

  public openAutocomplete() {
    let testObservable = new Subject<any>();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 'dave' },
      { name: 'Mike', value: 'mike' }
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this.fsPrompt.autocomplete({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
}
