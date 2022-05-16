import { ChangeDetectorRef, Component } from "@angular/core";

@Component({
    selector: 'popup-menu',
    templateUrl: './popup-menu.component.html',
    styleUrls: ['./style/popup-menu.style.scss']
})
export class PopupMenuComponent {
    public visible: boolean = false;

    public onMouseOver(): void {
        this.visible = true;
    }

    public onMouseLeave(): void {
        this.visible = false;
    }
}