import { Component, effect, signal } from '@angular/core';
import { MobleMenu } from "../moble-menu/moble-menu";

@Component({
  selector: 'app-header',
  imports: [MobleMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileMenuOpenSignal = signal(false);
  mobileMenuOpen = false;
  constructor() {
    effect(() => {
      if (this.mobileMenuOpenSignal()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.mobileMenuOpenSignal.set(this.mobileMenuOpen);
    
  }
}
