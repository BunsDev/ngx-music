import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { NgxMusicAudioData } from './interfaces/audio-data.interface';

@Component({
  selector: 'ngx-music',
  templateUrl: './ngx-music.component.html',
  styleUrls: ['./ngx-music.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMusicComponent implements OnInit {
  @Input()
  public audioData: NgxMusicAudioData;

  @Input()
  public theme: 'light' | 'dark' = 'dark';

  private _audio: HTMLAudioElement;

  private _context: AudioContext;

  private _analyser: AnalyserNode;

  private _gain: GainNode;

  private _source: MediaElementAudioSourceNode;

  private readonly _duration$ = new BehaviorSubject<number>(0);

  public readonly duration$ = this._duration$.asObservable().pipe(
    map(duration => {
      return Boolean(duration) 
        ? { seconds: duration, parsed: this.parseSecondsToMmSs(duration) }
        : { seconds: duration, parsed: '--:--' };
    })
  );

  private readonly _elapsed$ = new BehaviorSubject<number>(0);

  public readonly elapsed$ = this._elapsed$.asObservable().pipe(
    map((time) => {
      return Boolean(time)
        ? { seconds: time, parsed: this.parseSecondsToMmSs(time) }
        : { seconds: time, parsed: '00:00' };
    })
  )

  private readonly _volume$ = new BehaviorSubject<number>(0);

  public readonly volume$ = this._volume$.asObservable();

  public get audio(): HTMLAudioElement {
    return this._audio;
  }

  constructor() {
    this.connectAudioModules();
  }

  public ngOnInit(): void {
    this.setAudioSourceUrl(this.audioData.audioSrc);
  }

  public onPlay(): void {
    this._audio.play();
  }

  public onPause(): void {
    this._audio.pause();
  }

  public onNext(): void {
    console.log('next');
  }

  public onPrev(): void {
    console.log('prev');
  }

  public onVolumeChange(volume: number): void {
    this._audio.volume = volume / 100;
    this._volume$.next(volume);
  }

  public onTimeChange(currentTime: number): void {
    this._audio.currentTime = currentTime;
    this._elapsed$.next(currentTime);
  }

  private connectAudioModules(): void {
    this._audio = new Audio();
    this._audio.preload = 'metadata';
    this._audio.onloadedmetadata = (): void => {
      this._duration$.next(this._audio.duration);
      this._volume$.next(this._audio.volume * 100);
    }
    this._audio.ontimeupdate = (): void => {
      this._elapsed$.next(this._audio.currentTime);
    };

    this._context = new AudioContext();

    this._analyser = this._context.createAnalyser();

    this._gain = this._context.createGain();

    this._source = this._context.createMediaElementSource(this._audio);

    this._source.connect(this._analyser);
    this._analyser.connect(this._context.destination);
    this._gain.connect(this._context.destination);
  }

  private setAudioSourceUrl(src: string): void {
    this._audio.src = src;
  }

  private parseSecondsToMmSs(seconds: number): string {
    const [, mm, ss] = new Date(seconds * 1000).toISOString().split(':');
    return `${mm}:${ss.slice(0, 2)}`;
  }
}
