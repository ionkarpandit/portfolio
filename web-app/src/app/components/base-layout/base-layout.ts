import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProfileSummary } from "../profile-summary/profile-summary";
import { WorkExperience } from "../work-experience/work-experience";
import { Skills } from "../skills/skills";
import { AboutMe } from '../about-me/about-me';

@Component({
  selector: 'app-base-layout',
  imports: [ButtonModule,Header, Footer, ProfileSummary, WorkExperience, Skills, Header, AboutMe],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css',
})

export class BaseLayout {

}
