import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';


import { FsDialogSubtitleDirective } from '../../directives';
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

  @Input() public close = false;
  @Input() public back = false;
  @Input() public fullscreen = false;
  @Input() public fullscreenPercent = 90;
  
  public fullscreened = false;

  constructor(
    private _dialog: FsDialogComponent,
  ) {}

  public get fullscreenExpanded() {
    return this._dialog.fullscreen;
  }

  public fullscreenClick() {
    if(this.fullscreenExpanded){
      this._dialog.closeFullscreen();
    } else {
      this._dialog.openFullscreen();
    }
  }

}
