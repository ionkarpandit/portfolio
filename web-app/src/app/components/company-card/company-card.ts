import { Component, Input } from '@angular/core';
import Company from '../../models/company';

@Component({
  selector: 'app-company-card',
  imports: [],
  templateUrl: './company-card.html',
  styleUrl: './company-card.css',
})
export class CompanyCard {
  @Input({ required: true }) company!: Company;
}
