import { Injector } from '@angular/core';
import { Route } from '@angular/router';

import { MatDialogConfig } from '@angular/material/dialog';

import { FsDialogRouteComponent } from '../components/route/route.component';
import { FS_DIALOG_INJECTOR } from '../injectors';


export function fsDialogRoute(route: Route, dialogConfig?: MatDialogConfig): Route {

  const {
    path,
    component,
    data: routeData,
    ...restRoute
  } = route;

  const { data: dialogData } = dialogConfig || {};

  const data = {
    ...(routeData || {}),
    ...(dialogData || {}),
  };

  return  {
    path: path,
    component: FsDialogRouteComponent,
    ...restRoute,
    providers: [
      {
        provide: FS_DIALOG_INJECTOR,
        useFactory: (injector: Injector) => {
          return injector;
        },
        deps: [Injector],
      },
    ],
    data: {
      ...data,
      fsDialog: { 
        component,
        config: {
          data,
          ...dialogConfig,
        },
      },
    },
  };

}
