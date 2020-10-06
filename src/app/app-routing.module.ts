import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackPlayerComponent } from './track-player/track-player.component';

const routes: Routes = [
  {path: 'player', component: TrackPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
