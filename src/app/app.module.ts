import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrackPlayerModule} from './track-player/track-player.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TrackPlayerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
