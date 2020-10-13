import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {TrackPlayerComponent} from './track-player.component';
import {CurrentMaskComponent} from './current-mask/current-mask.component';
import {CurrentMaskTimerComponent} from './current-mask-timer/current-mask-timer.component';
import {TrackPlayerRoutingModule} from './track-player-routing.module';


@NgModule({
    declarations: [
        TrackPlayerComponent,
        CurrentMaskComponent,
        CurrentMaskTimerComponent
    ],
    imports: [
        FontAwesomeModule,
        TrackPlayerRoutingModule,
        CommonModule
    ],
    exports: [
        TrackPlayerComponent
    ]
})
export class TrackPlayerModule {
}
