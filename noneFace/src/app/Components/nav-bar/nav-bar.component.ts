import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }
  checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      // Set showMenu based on screen width
      this.showMenu = window.innerWidth > 850;
    }
  }
  
  activeLink: string = 'home';
  showMenu: boolean = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  isActive(link: string): boolean {
    
    return this.activeLink === link;
  }
}
