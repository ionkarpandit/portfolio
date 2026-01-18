import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProfileImage } from "../profile-image/profile-image";

@Component({
  selector: 'app-profile-summary',
  imports: [ProfileImage],
  templateUrl: './profile-summary.html',
  styleUrl: './profile-summary.css',
})
export class ProfileSummary implements OnInit, AfterViewInit {

  name = 'Onkar Sharma';
  roleText = 'Senior Software Engineer';
  joiningDate = new Date('2020-10-01'); // Your joining date
  years:number= 0;
  ngAfterViewInit(): void {
    //this.observeFade();
  }

  ngOnInit() {
    this.calculateExperience();
  }

  private observeFade() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    document.querySelectorAll('.fade-up')
      .forEach(el => observer.observe(el));
  }

  calculateExperience() {
    const today = new Date();

    let years = today.getFullYear() - this.joiningDate.getFullYear();

    // Check if the joining month/day has not occurred yet this year
    const hasNotAnniversaryHappened =
      today.getMonth() < this.joiningDate.getMonth() ||
      (today.getMonth() === this.joiningDate.getMonth() &&
        today.getDate() < this.joiningDate.getDate());

    if (hasNotAnniversaryHappened) {
      years -= 1;
    }

    this.years = years;
  }
}
