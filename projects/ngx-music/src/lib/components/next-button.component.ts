import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ngx-music-next-button',
    template: `
        <svg (click)="onClick.emit()" fill="white" height="24" width="24"> <path d="M16.5 18V6h2v12Zm-11 0V6l9 6Z" /> </svg>
    `,
    styles: [
        ':host { display: block; width: 24px; height: 24px; cursor: pointer; }'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextButtonComponent {
    @Output() 
    public readonly onClick = new EventEmitter<void>();
}
