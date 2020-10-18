import {Component, OnInit} from '@angular/core';
import {MaskService} from '../services/mask.service';


@Component({
    selector: 'track-player',
    templateUrl: './track-player.component.html',
    styleUrls: ['./track-player.component.scss']
})
export class TrackPlayerComponent implements OnInit {

    constructor(
        private maskService: MaskService
    ) {
    }

    ngOnInit(): void {
        this.maskService.masksTest().subscribe((data) => {
            console.log(data);
        });
    }

}
