import { Type } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';


export interface IFsDialogRouteConfig {
  component: Type<any>,
  config: MatDialogConfig<unknown>,
}
