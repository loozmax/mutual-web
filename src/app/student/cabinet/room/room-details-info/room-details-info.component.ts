import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject, takeUntil } from "rxjs";
import { IBasicRoom, ITaskResponse, RoomService } from "src/app/services/room.service";

@Component({
    templateUrl: './room-details-info.component.html',
    styleUrls: ['./styles/room-details.style.scss']
})
export class RoomDetailsInfoComponent implements OnInit, OnDestroy {
    public currentMenu: 'room' | 'members' | 'evaluatedWorks' | 'evaluate' = 'room';
    public room$: Observable<IBasicRoom>;
    public roomId: string;
    private _destroySubj$: Subject<void> = new Subject<void>();

    constructor(
        private _activatedRouter: ActivatedRoute,
        private _roomService: RoomService,
        private _router: Router
    ) { }

    public ngOnInit(): void {
        document.querySelector('body').style.background = "#866EFF0D";
        this.roomId = this._activatedRouter.snapshot.paramMap.get('id');

        this.room$ = this._roomService.getRoomById(parseInt(this.roomId))
            .pipe(
                takeUntil(this._destroySubj$)
            );
    }

    public changeStateHandler(value: 'room' | 'members' | 'evaluate' | 'evaluatedWorks'): void {
        this.currentMenu = value;

        switch (value) {
            case 'room':
                this._router.navigate(['cabinet', 'room', this.roomId]);
                break;
        }
    }

    public ngOnDestroy(): void {
        this._destroySubj$.next();
    }
}