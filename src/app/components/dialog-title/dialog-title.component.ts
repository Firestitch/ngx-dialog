import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

import { FsDialogSubtitleDirective } from '../../directives';


@Component({
  selector: 'fs-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDialogTitleComponent {

  @ContentChild(FsDialogSubtitleDirective, { read: TemplateRef })
  public subtitle: TemplateRef<any>;

  @Input() public close = false;
  @Input() public back = false;

}
