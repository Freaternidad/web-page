import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ef-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  host: {
    'class': 'ef-video'
  },
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent {

}
