# @firestitch/dialog

### Installation

`npm install @firestitch/dialog --save`

### How to use

- Add `FsDialogModule` module to your main module file into `imports` section
- Import and add `FsPrompt` service in your target component like 
```Javascript
  constructor(public fsDialog: FsPrompt) {}
```
### Usage:
- Confirmation:
```Javascript
let dialogRef = this.fsDialog.confirm({
  title: 'Confirm',
  template: 'Are you sure?',
});


dialogRef.subscribe((result: boolean) => {
  alert('Ok');
}, (error: any) => {
  alert('Cancel');
});
```

- Input:
```Javascript
let dialogRef = this.fsDialog.input({
  hint: 'Use commas to separate multiple email addresses',
  label: 'Please an email adresses',
});

dialogRef.subscribe((value: string | boolean) => {
  console.log(value);
})
```

- Select (can be used with array, observable, promise or callback which return one of those types):
```Javascript
let testObservable = new Subject<any>();

// Array test case
let simpleArray = [
  { name: 'Dave', value: 0 },
  { name: 'Mike', value: 1 }
];

// Observable test case
let testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(simpleArray);
    // reject('error')
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
  console.log(result);
})
```

- Autocomplete (the same as select):
```Javascript
let testObservable = new Subject<any>();

// Array test case
let simpleArray = [
  { name: 'Dave', value: 0 },
  { name: 'Mike', value: 1 }
];

// Observable test case
let testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(simpleArray);
    // reject('error')
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
```


