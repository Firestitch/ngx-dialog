import { Route } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';

import { FsDialogRouteComponent } from '../components/route/route.component';


export function fsDialogRoute(route: Route, dialogConfig?: MatDialogConfig): Route {

  const {
    path,
    component,
    data: routeData,
    ...restRoute
  } = route;

  const { data: dialogData, ...restDialogConfig } = dialogConfig || {};

  const data = {
    ...(routeData || {}),
    ...(dialogData || {}),
  };

  return  {
    path: path,
    component: FsDialogRouteComponent,
    ...restRoute,
    data: {
      fsDialog: {
        component,
        config: {
          data,
          ...restDialogConfig,
        },
      }
    }
  };

}
