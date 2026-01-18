import { Component, OnInit } from '@angular/core';
import { WorkExperienceTimeline } from "../work-experience-timeline/work-experience-timeline";
@Component({
  selector: 'app-work-experience',
  imports: [ WorkExperienceTimeline],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience implements OnInit {

  ngOnInit(): void {
  }
}
