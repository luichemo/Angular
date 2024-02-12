import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  images =[
    {name: 'carousel-1.jpg' },
    {name: 'carousel-2.jpg'}
  ]

  showCarousel = true;

  
}
