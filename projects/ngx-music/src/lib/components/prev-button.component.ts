import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ngx-music-prev-button',
    template: `
        <svg (click)="onClick.emit()" fill="white" height="24" width="24"><path d="M5.5 18V6h2v12Zm13 0-9-6 9-6Z"/></svg>
    `,
    styles: [
        ':host { display: block; width: 24px; height: 24px; cursor: pointer; }'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrevButtonComponent {
    @Output() 
    public readonly onClick = new EventEmitter<void>();
}
