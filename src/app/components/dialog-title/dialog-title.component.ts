import { ChangeDetectionStrategy, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef, inject } from '@angular/core';

import {
  FsDialogSubtitleDirective, FsDialogSupertitleDirective, FsDialogTitleDirective,
} from '../../directives';
import { FsDialogComponent } from '../dialog/fs-dialog.component';
import { NgTemplateOutlet } from '@angular/common';
import { MatIconAnchor } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';


@Component({
    selector: 'fs-dialog-title',
    templateUrl: './dialog-title.component.html',
    styleUrls: ['./dialog-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgTemplateOutlet,
        MatIconAnchor,
        MatDialogClose,
        MatIcon,
    ],
})
export class FsDialogTitleComponent implements OnChanges {
  private _dialog = inject(FsDialogComponent);


  @ContentChild(FsDialogSubtitleDirective, { read: TemplateRef })
  public subtitleTemplate: TemplateRef<any>;

  @ContentChild(FsDialogSupertitleDirective, { read: TemplateRef })
  public supertitleTemplate: TemplateRef<any>;

  @ContentChild(FsDialogTitleDirective, { read: TemplateRef })
  public titleTemplate: TemplateRef<any>;

  @Input() public close = false;
  @Input() public dockToggle = false;
  @Input() public back = false;

  public get dialog(): FsDialogComponent {
    return this._dialog;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.close) {
      this._dialog.closeButton = this.close;
    }
  }
}
