import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-component',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss'],
})
export class ButtonComponent {
    @Input() isButton: boolean;
    @Input() copy: string;
}
