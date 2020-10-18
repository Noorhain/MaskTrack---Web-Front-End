import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrackPlayerComponent} from './track-player.component';
import {CurrentMaskComponent} from './current-mask/current-mask.component';
import {CurrentMaskTimerComponent} from './current-mask-timer/current-mask-timer.component';
import {TrackPlayerRoutingModule} from './track-player-routing.module';
import {MaterialModule} from '../material.module';


@NgModule({
    declarations: [
        TrackPlayerComponent,
        CurrentMaskComponent,
        CurrentMaskTimerComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TrackPlayerRoutingModule
    ],
    exports: [
        TrackPlayerComponent
    ]
})
export class TrackPlayerModule {
}
