import { Component, OnInit } from '@angular/core';
import Skill from '../../models/skill';
import { SkillCard } from "../skill-card/skill-card";

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  ngOnInit(): void {
    this.skills = this.getSkills();
  }
  skills: Skill[] = [];

  getSkills() {
    return [
      { 
        title: 'Web Development', subtitle:'Full-stack applications',
        favSkils: ['.NET 8/6', '.NET Core', 'EF Core', 'ASP.NET Core', 'MVC', 'Web API', 'Web Forms','MS SQL Server'], 
        nonFavSkills: ['Angular', 'Docker'] 
      },
      { 
        title: 'Tools / Platforms', subtitle:'Development & productivity tools',
        favSkils: ['Git', 'GitHub','Visual Studio','VS Code','SSMS','Postman'], 
        nonFavSkills: ['SVN','Figma'] 
      },
      { 
        title: 'Programming', subtitle:'Core languages & fundamentals',
        favSkils: ['C#', 'HTML', 'CSS','JavaScript', 'jQuery','SQL'], 
        nonFavSkills: [] 
      }
      
    ] as Skill[];
  }
}
