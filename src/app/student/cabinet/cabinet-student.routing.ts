import { Routes } from "@angular/router";
import { CabinetLayoutHeaderComponent } from "./cabinet-layout-header/cabinet-layout-header.component";
import { CanActivateCabinet } from "./cabinet-student.guard";
import { MainPageComponent } from "./main-page/main-page.component";
import { MyWorksComponent } from "./my-works/my-works.component";
import { NotFoundErrorComponent } from "./not-found-error/not-found-error.component";
import { TaskDetailsComponent } from "./project/project-details/project-details.component";
import { RoomDetailsInfoComponent } from "./room/room-details-info/room-details-info.component";
import { RoomInformationsComponent } from "./room/room-informations/room-informations.component";

export const routes: Routes = [
    {
        path: '',
        component: CabinetLayoutHeaderComponent,
        canActivate: [CanActivateCabinet],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'main',
            },
            {
                path: 'main',
                component: MainPageComponent,
            },
            {
                path: 'works',
                component: MyWorksComponent
            },
            {
                path: 'room/:id',
                component: RoomDetailsInfoComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'info'
                    },
                    {
                        path: 'info',
                        component: RoomInformationsComponent
                    },
                    {
                        path: 'task/:id',
                        component: TaskDetailsComponent
                    }
                ]
            },
            {
                path: '**',
                pathMatch: 'full',
                component: NotFoundErrorComponent
            }
        ]
    }
];