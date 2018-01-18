import { MatDialogConfig } from '@angular/material';
import { FsValuesFunction } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { IFsPromptConfig } from '../interfaces';
import { PromptType } from '../fsprompt.service';


export class FsPromptConfig<T> {
  public title = '';
  public template = '';
  public hint = '';
  public label = '';
  public class = '';
  public commitLabel = 'Ok';
  public cancelLabel = 'Cancel';
  public values: Observable<T> | Promise<T> | T[] | FsValuesFunction = [];

  protected _dialogConfig: MatDialogConfig;

  protected _defaultDialogConfig = {
    width: '500px',
    height: 'auto'
  };

  constructor(
    public config: IFsPromptConfig,
  ) {
    this.applyDialogConfig(config);
    this.applyConfig(config);
  }

  get dialogConfig() {

    let config = Object.assign({}, this._dialogConfig);
    config.data = {
      title: this.title,
      template: this.template,
      hint: this.hint,
      label: this.label,
      class: this.class,
      commitLabel: this.commitLabel,
      cancelLabel: this.cancelLabel,
      values: this.values
    };

    return config
  }

  protected applyConfig(config: IFsPromptConfig) {
    Object.assign(this, config);
  }

  protected applyDialogConfig(config: IFsPromptConfig) {
    const inputDialogConfig = config.dialogConfig;

    // Previously let's assign default config
    this._dialogConfig = Object.assign({}, this._defaultDialogConfig);

    // Then assign passed config
    if (inputDialogConfig) {
      Object.assign(this._dialogConfig, inputDialogConfig);
    }

    // Assign panel class (class for modal container) only if we don't have this class in modal options
    if (config.class) {
      this._dialogConfig.panelClass = config.class;
    }
  }
}
