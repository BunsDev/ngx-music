import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxMusicTime } from '../../interfaces/time.interface';

@Component({
    selector: 'ngx-music-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {
    @Input() 
    public duration: NgxMusicTime;

    @Input() 
    public elapsed: NgxMusicTime;

    @Output() 
    private readonly onTimeChange = new EventEmitter<number>();

    constructor() { }

    public ngOnInit(): void { }

    public handleTimeChange(event: any): void {
        this.onTimeChange.emit(event.target.value);
    }

    public getRangeGradient(elapsedSeconds: number): string {
        const gradientValue = (elapsedSeconds - 0) / (this.duration.seconds - 0) * 100;
        return 'linear-gradient(to right, white 0%, white ' + gradientValue + '%, #c1c1c1 ' + gradientValue + '%, #c1c1c1 100%)';
    }
}
