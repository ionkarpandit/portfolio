import { AfterViewInit, Component } from '@angular/core';
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";

@Component({
  selector: 'app-footer',
  imports: [SocialMediaIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit {
  currentYear: number = new Date().getFullYear();


  ngAfterViewInit() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
}
