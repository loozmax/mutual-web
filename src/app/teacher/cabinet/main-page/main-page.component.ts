import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, takeUntil } from "rxjs";
import { RoomService } from "src/app/services/room.service";
import { UserBaseService } from "src/app/services/user.base.service";

@Component({
    templateUrl: './main-page.component.html',
    styleUrls: ['./styles/main-page.style.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

    public allRooms$: Observable<any>;

    private _subjectDestroy$: Subject<void> = new Subject<void>();

    constructor(
        private _roomService: RoomService,
        private _userBaseService: UserBaseService,
        private _router: Router
    ) { }

    public createRoom(): void {
        this._router.navigate(['rooms', 'create']);
    }

    public toDetails(id: number): void {
        this._router.navigate(['rooms', 'info', id])
    }

    public ngOnInit(): void {
        this.allRooms$ = this._roomService.getRooms(0, 100)
            .pipe(
                takeUntil(this._subjectDestroy$)
            )
    }

    public ngOnDestroy(): void {
        this._subjectDestroy$.next();
    }
}