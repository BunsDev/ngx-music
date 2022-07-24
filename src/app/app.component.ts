import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx-music';

  public readonly audioData = {
    name: 'Liquid Spirit (Claptone remix)',
    artist: 'Gregory Porter',
    coverUrl: '../assets/cover.jpg',
    audioSrc: '../assets/audio.mp3'
  }
}
