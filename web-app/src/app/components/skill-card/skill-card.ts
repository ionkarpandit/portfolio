import { Component, Input } from '@angular/core';
import Skill from '../../models/skill';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input() skill!: Skill;
}
