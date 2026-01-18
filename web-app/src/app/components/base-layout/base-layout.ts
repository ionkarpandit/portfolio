import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProfileSummary } from "../profile-summary/profile-summary";
import { WorkExperience } from "../work-experience/work-experience";
import { Skills } from "../skills/skills";  
@Component({
  selector: 'app-base-layout',
  imports: [ButtonModule,Header, Footer, ProfileSummary, WorkExperience, Skills, Header],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css',
})
export class BaseLayout {

}
