import { Component, OnInit } from '@angular/core';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons/faPlayCircle';
import {faPauseCircle} from '@fortawesome/free-regular-svg-icons/';
import {faSquare} from '@fortawesome/free-regular-svg-icons/';

@Component({
  selector: 'current-mask',
  templateUrl: './current-mask.component.html',
  styleUrls: ['./current-mask.component.scss']
})
export class CurrentMaskComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  faPauseCircle = faPauseCircle;
  faSquare = faSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
