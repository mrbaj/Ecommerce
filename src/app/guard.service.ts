import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanMatch {
  isAdmin = false;
  constructor(private rest: RestService, private router: Router) {
    this.rest.userIfAdmin.subscribe((data) => {
      console.log('admin data updated in guard serice' + data);
      this.isAdmin = data;
    });
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('in guard - ' + this.isAdmin);

    return this.isAdmin;
  }
}
