import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ngx-music-volume',
    templateUrl: './volume.component.html',
    styleUrls: ['./volume.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolumeComponent {
    @Input() 
    public volume: number;

    @Output() 
    private readonly onVolumeChange = new EventEmitter<number>();

    public readonly VOLUME_RANGE_MIN = 0;

    public readonly VOLUME_RANGE_MAX = 100;

    public handleVolumeChange(event: any): void {
        this.onVolumeChange.emit(event.target.value);
    }

    public getRangeGradient(volume: number): string {
        const gradientValue = (volume - this.VOLUME_RANGE_MIN) / (this.VOLUME_RANGE_MAX - this.VOLUME_RANGE_MIN) * 100;
        return 'linear-gradient(to right, white 0%, white ' + gradientValue + '%, #c1c1c1 ' + gradientValue + '%, #c1c1c1 100%)';
    }
}
