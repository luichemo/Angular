import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';

  images = [
    {
      imgSrc: 'assets/ph1.jpg',
      imgAlt: 'Image 1',
    },
    {
      imgSrc: 'assets/ph2.jpg',
      imgAlt: 'Image 2',
    },
    {
      imgSrc: 'assets/ph3.jpg',
      imgAlt: 'Image 3',
    },
    {
      imgSrc: 'assets/ph4.jpg',
      imgAlt: 'Image 4',
    },
    {
      imgSrc: 'assets/ph5.jpg',
      imgAlt: 'Image 5',
    },
    {
      imgSrc: 'assets/ph6.jpg',
      imgAlt: 'Image 6',
    },

  ]
}
