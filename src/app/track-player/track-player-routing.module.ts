import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrackPlayerComponent} from './track-player.component';

const routes: Routes = [
    {path: 'player', component: TrackPlayerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackPlayerRoutingModule {
}
