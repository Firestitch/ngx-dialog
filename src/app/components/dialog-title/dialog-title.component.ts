import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

import {
  FsDialogSubtitleDirective, FsDialogSupertitleDirective, FsDialogTitleDirective,
} from '../../directives';
import { FsDialogComponent } from '../dialog/fs-dialog.component';


@Component({
  selector: 'fs-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogTitleComponent implements OnChanges {

  @ContentChild(FsDialogSubtitleDirective, { read: TemplateRef })
  public subtitleTemplate: TemplateRef<any>;

  @ContentChild(FsDialogSupertitleDirective, { read: TemplateRef })
  public supertitleTemplate: TemplateRef<any>;

  @ContentChild(FsDialogTitleDirective, { read: TemplateRef })
  public titleTemplate: TemplateRef<any>;

  @Input() public close = false;
  @Input() public dockToggle = false;
  @Input() public back = false;

  constructor(
    private _dialog: FsDialogComponent,
  ) {}

  public get dialog(): FsDialogComponent {
    return this._dialog;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.close) {
      this._dialog.closeButton = this.close;
    }
  }
}
