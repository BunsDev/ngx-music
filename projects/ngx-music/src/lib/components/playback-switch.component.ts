import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ngx-music-playback-switch',
    template: `
            <ng-container *ngIf="playbackState === 'paused'">
                <svg (click)="switchState()" fill="white" height="24" width="24"><path d="M8 19V5l11 7Z"/></svg>
            </ng-container>
            <ng-container *ngIf="playbackState === 'playing'">
                <svg (click)="switchState()" height="24" width="24" fill="white"><path d="M13 19V5h6v14Zm-8 0V5h6v14Z"/></svg>
            </ng-container>
    `,
    styles: [
        ':host { display: block; width: 24px; height: 24px; cursor: pointer; }'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaybackSwitchComponent {
    @Output()
    private readonly onPlay = new EventEmitter<void>();

    @Output()
    private readonly onPause = new EventEmitter<void>();

    public playbackState: 'playing' | 'paused' = 'paused';

    public switchState(): void {
        if (this.playbackState === 'playing') {
            this.playbackState = 'paused';
            this.onPause.emit();
        } else {
            this.playbackState = 'playing';
            this.onPlay.emit();
        }
    }
}
