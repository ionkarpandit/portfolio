
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMe } from '../contact-me/contact-me';
import { SocialMediaIcons } from '../social-media-icons/social-media-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactMe, SocialMediaIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();
  isContactModalOpen = false;

  openContactModal() {
    this.isContactModalOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  closeContactModal() {
    this.isContactModalOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

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