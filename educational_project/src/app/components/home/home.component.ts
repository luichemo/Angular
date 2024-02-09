import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  images =[
    {name: 'carousel-1.jpg' },
    {name: 'carousel-2.jpg'}
  ]

  showCarousel = true;
}
