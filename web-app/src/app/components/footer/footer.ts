import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaIcons } from '../social-media-icons/social-media-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,      // ✅ REQUIRED for *ngIf, *ngFor
    SocialMediaIcons
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit {

  currentYear: number = new Date().getFullYear();

  // Modal state
  isContactModalOpen = false;

  /* ================= MODAL METHODS ================= */

  openContactModal(): void {
    this.isContactModalOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  closeContactModal(): void {
    this.isContactModalOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  // Close modal on ESC
  @HostListener('document:keydown.escape', [])
  onEscKey(): void {
    if (this.isContactModalOpen) {
      this.closeContactModal();
    }
  }

  /* ================= ANIMATION OBSERVER ================= */

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.fade-up')
      .forEach(el => observer.observe(el));
  }
}
