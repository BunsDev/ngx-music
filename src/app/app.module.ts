import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMusicModule } from 'projects/ngx-music/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
