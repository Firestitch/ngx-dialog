import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FsPrompt, Converter_Type } from '../fsprompt.service';

@Component({
  selector: 'fs-prompt-select',
  templateUrl: 'fs-prompt-select.component.html',
})
export class FsPromptSelectComponent implements OnInit {

  public result;
  public loading = false;
  public items = [];
  public error = false;

  constructor(
    public dialogRef: MatDialogRef<FsPromptSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public ngOnInit() {
    this.loadItems();
  }

  public complete() {
    this.dialogRef.close(this.result);
  }

  private loadItems() {
    let result = FsPrompt.valuesConverter(this.data.values);

    switch (result.type) {
      case Converter_Type.observable: {
        this.loading = true;
        result.values.subscribe((response) => {
          this.items = response;
          this.loading = false;
        }, () => {
          this.error = true;
          this.loading = false;
        })
      } break;

      case Converter_Type.promise: {
        this.loading = true;
        result.values.then((response) => {
          this.items = response;
          this.loading = false;
        }, () => {
          this.error = true;
          this.loading = false;
        })
      } break;

      case Converter_Type.array: {
        this.items = this.data.values;
      } break;

      default: {
        this.error = true;
      }
    }
  }
}
