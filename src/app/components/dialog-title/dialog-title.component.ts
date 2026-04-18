import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  contentChild,
  inject,
} from '@angular/core';

import { MatIconAnchor } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import {
  FsDialogSubtitleDirective, FsDialogSupertitleDirective, FsDialogTitleDirective,
} from '../../directives';
import { FsDialogComponent } from '../dialog/fs-dialog.component';


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

  /** Signal-based queries so OnPush refreshes when projected content (e.g. inside `@if`) appears later. */
  public readonly subtitleTemplate = contentChild(FsDialogSubtitleDirective, {
    read: TemplateRef,
    descendants: true,
  });

  public readonly supertitleTemplate = contentChild(FsDialogSupertitleDirective, {
    read: TemplateRef,
    descendants: true,
  });

  public readonly titleTemplate = contentChild(FsDialogTitleDirective, {
    read: TemplateRef,
    descendants: true,
  });

  @Input() public close = false;
  @Input() public dockToggle = false;
  @Input() public back = false;

  private _dialog = inject(FsDialogComponent);

  public get dialog(): FsDialogComponent {
    return this._dialog;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.close) {
      this._dialog.closeButton = this.close;
    }
  }
}
