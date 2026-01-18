import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-moble-menu',
  imports: [],
  templateUrl: './moble-menu.html',
  styleUrl: './moble-menu.css',
})
export class MobleMenu {
  @Input({ required: true }) mobileMenuOpen!: boolean;
  @Output() mobileMenuOpenChange = new EventEmitter<boolean>();
  closeMenu() {
    this.mobileMenuOpenChange.emit(false);
  }
}
