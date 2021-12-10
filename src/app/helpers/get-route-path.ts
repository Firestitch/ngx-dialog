import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

export function getRoutePath(route: ActivatedRoute) {
  if (route.firstChild) {
    return getTailPath(route.snapshot);
  } else {
    return getHeadPath(route.snapshot);
  }
}

export function getTailPath(route: ActivatedRouteSnapshot, path = '') {
  if (route.firstChild) {
    return `/${route.url.join('/')}/${getTailPath(route.firstChild, path)}`;
  } else {
    return `${route.url.join('/')}`;
  }
}

export function getHeadPath(route: ActivatedRouteSnapshot, path = '') {
  if (route.parent !== null) {
    return getHeadPath(route.parent, path) + '/' + route.url.join('/');
  } else {
    return route.url.join('/');
  }
}
