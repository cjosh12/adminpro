import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SubtitleComponent } from "../subtitle";

@Component({
    selector: 'shared-title-card',
    standalone: true,
    imports: [CommonModule, SubtitleComponent],
    templateUrl: './title-card.component.html'
})
export class TitleCardComponent{

    @Input()
    title!: string;

    @Input()
    topMargin: string = 'mt-6';

    @Input()
    topSideButton?: boolean;
}