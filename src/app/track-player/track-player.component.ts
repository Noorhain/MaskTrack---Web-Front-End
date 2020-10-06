import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons/faPlusSquare';
import {faDotCircle} from '@fortawesome/free-regular-svg-icons/faDotCircle';


@Component({
    selector: 'track-player',
    templateUrl: './track-player.component.html',
    styleUrls: ['./track-player.component.scss']
})
export class TrackPlayerComponent implements OnInit {
    faUser = faUser;
    faPlusSquare = faPlusSquare;
    faDotCircle = faDotCircle;

    constructor() {
    }

    ngOnInit(): void {
    }

}
