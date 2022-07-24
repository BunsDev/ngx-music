import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextButtonComponent } from './components/next-button.component';
import { PlaybackSwitchComponent } from './components/playback-switch.component';
import { PrevButtonComponent } from './components/prev-button.component';
import { ProgressComponent } from './components/progress/progress.component';
import { VolumeComponent } from './components/volume/volume.component';
import { NgLetDirective } from './directives/ng-let.directive';
import { NgxMusicComponent } from './ngx-music.component';

@NgModule({
  declarations: [
    // components
    NgxMusicComponent,
    ProgressComponent,
    PlaybackSwitchComponent,
    VolumeComponent,
    PrevButtonComponent,
    NextButtonComponent,

    // directives
    NgLetDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxMusicComponent
  ]
})
export class NgxMusicModule {}
