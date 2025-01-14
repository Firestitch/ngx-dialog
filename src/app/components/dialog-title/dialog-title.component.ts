import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';

import { FsDialogSubtitleDirective, FsDialogSupertitleDirective } from '../../directives';
import { FsDialogComponent } from '../dialog/fs-dialog.component';


@Component({
  selector: 'fs-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogTitleComponent {

  @ContentChild(FsDialogSubtitleDirective, { read: TemplateRef })
  public subtitle: TemplateRef<any>;

  @ContentChild(FsDialogSupertitleDirective, { read: TemplateRef })
  public supertitle: TemplateRef<any>;

  @Input() public close = false;
  @Input() public dockToggle = false;
  @Input() public back = false;
  @Input() public fullscreenPercent = 90;

  @HostBinding('class.mat-mdc-dialog-title')
  public classTitle = true;

  constructor(
    private _dialog: FsDialogComponent,
  ) {}

  public get dialog(): FsDialogComponent {
    return this._dialog;
  }

  public get dock() {
    return this._dialog.dock;
  }
}
