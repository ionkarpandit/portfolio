import { Component, OnInit, signal } from '@angular/core';
import { CompanyCard } from "../company-card/company-card";
import Company from '../../models/company';
import { ProjectModal } from "../project-modal/project-modal";

@Component({
  selector: 'app-work-experience-timeline',
  imports: [CompanyCard, ProjectModal],
  templateUrl: './work-experience-timeline.html',
  styleUrl: './work-experience-timeline.css',
})
export class WorkExperienceTimeline implements OnInit{
  public companies:Company[] = [];
  
  ngOnInit(): void {
    this.companies = this.getCompanies();
  }

  modalOpenSignal = signal(false);
  selectedCompany: any = null;

  openModal(company: any) {
    this.selectedCompany = company;
    this.modalOpenSignal.set(true);
  }

  closeModal() {
    this.modalOpenSignal.set(false);
    this.selectedCompany = null;
  }
  getCompanies():Company[] {
    return [
          {
        name: 'PrismHR, A Vensure Employer Solutions Company',
        designation: 'Senior Software Engineer',
        startDate: '01th October, 2020',
        endDate: 'Till Now',
        isCurrent: true,
        logoUrl: 'assets/img/epaysystem.png',  
        points: [
        'Led design and modernization of multi-tenant payroll systems serving 5+ US enterprise clients across healthcare and government sectors',
        'Improved API response times by ~35% through SQL optimization and asynchronous processing', 
        'Refactored/Migrated legacy .NET Framework modules to .NET 8, increasing stability and maintainability',
        'Built reusable Web API components supporting multi-tenant architecture for 2 major enterprise clients', 
        'Mentored 4+ junior developers on code reviews, code quality and clean architecture (SOLID principles)'
      ],
      projects: [
        { title: 'Project 1', description: 'Description 1' },
        { title: 'Project 2', description: 'Description 2' },
      ],
      }
    ]as Company[];
  }

}
