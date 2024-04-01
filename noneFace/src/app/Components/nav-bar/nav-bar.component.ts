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
  showMenu: boolean = false;

  
  

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth < 997) {
      // Reset the menu to default position when scrolling
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      // Set showMenu based on screen width
      this.showMenu = window.innerWidth > 997;
    }
  }
  activeLink: string = 'home';


  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
