import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackPlayerComponent } from './track-player/track-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentMaskComponent } from './current-mask/current-mask.component';
import { CurrentMaskTimerComponent } from './current-mask-timer/current-mask-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackPlayerComponent,
    CurrentMaskComponent,
    CurrentMaskTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
