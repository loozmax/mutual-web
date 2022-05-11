import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, Subscriber } from "rxjs";

@Injectable()
export class CanActivateLogin implements CanActivate {

    constructor(
        private _router: Router
    ) { }

    public canActivate(): Observable<boolean> {
        return new Observable((observer: Subscriber<boolean>): void => {
            if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))?.role === 'ROLE_TEACHER') {
                this._router.navigate(['rooms']);
            } else if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))?.role !== 'ROLE_TEACHER') {
                this._router.navigate(['cabinet', 'main']);
            } else {
                observer.next(true);
            }
        })
    }
}