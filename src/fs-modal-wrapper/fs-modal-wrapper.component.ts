import {
  Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, Type, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FsDialogService } from '../fsdialog.service';

@Component({
  selector: 'fs-modal-wrapper',
  templateUrl: 'fs-modal-wrapper.component.html'
})
export class FsModalWrapperComponent implements OnInit {

  @ViewChild('content', { read: ViewContainerRef }) public contentContainerRef;

  private _contentComponent;

  constructor(
    public dialogRef: MatDialogRef<FsModalWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private fsDialog: FsDialogService
  ) {
  }

  public ngOnInit() {
    this._contentComponent = this.createComponentInstance(this.contentContainerRef, this.data.component, this.data);
  }

  public cancel() {
    let data = this._contentComponent.instance.getData && this._contentComponent.instance.getData() || void 0;

    // debugger;
    if (this.data.confirm) {
      let needConfirm = this._contentComponent.instance.needConfirmation;

      if (needConfirm) {
        const confirmRef = this.fsDialog.confirm({
          title: this.data.confirm.title,
          content: this.data.confirm.message,
          okLabel: this.data.confirm.okLabel,
          cancelLabel: this.data.confirm.cancelLabel
        });

        confirmRef.afterClosed().subscribe((result) => {
          if (result) {
            this.dialogRef.close(data)
          }
        })
      } else {
        this.dialogRef.close(data);
      }
    } else {
      this.dialogRef.close(data);
    }
  }

  public close() {
    this.dialogRef.close();
  }

  private createComponentInstance<C>(
    viewContainerRef: ViewContainerRef,
    component: Type<C>,
    data: any
  ): ComponentRef<C> {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const componentRef =  viewContainerRef.createComponent<C>(
      componentFactory,
      viewContainerRef.length
    );

    (<any>componentRef.instance).data = data;

    return componentRef
  }
}
