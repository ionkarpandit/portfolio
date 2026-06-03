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
      // {
      //   name: '',
      //   designation: 'Senior Software Engineer',
      //   startDate: '',
      //   endDate: '',
      //   isCurrent: true,
      //   logoUrl: 'assets/img/epaysystem.png',  
      //   points: [ ],
      // projects: [
      //   { title: 'Project 1', description: 'Description 1' }      ],
      // },
          {
        name: 'Epay Systems/PrismHR, A Vensure Employer Solutions Company',
        designation: 'Associate Software Engineer - Intern',
        startDate: '13th January, 2020',
        endDate: '30th September, 2020',
        isCurrent: false,
        logoUrl: 'assets/img/epaysystem.png',  
        points: [
        'Led design and modernization of multi-tenant payroll systems serving 5+ US enterprise clients across healthcare and government sectors',
        'Improved API response times by ~35% through SQL optimization and asynchronous processing', 
        'Refactored/Migrated legacy .NET Framework modules to .NET 8, increasing stability and maintainability',
        'Built reusable Web API components supporting multi-tenant architecture for 2 major enterprise clients', 
        'Mentored 4+ junior developers on code reviews, code quality and clean architecture (SOLID principles)'
      ],
      }, {
        name: 'PrismHR, A Vensure Employer Solutions Company',
        designation: 'Senior Software Engineer',
        startDate: '01th October, 2020',
        endDate: '03rd February, 2026',
        isCurrent: false,
        logoUrl: 'assets/img/epaysystem.png',  
        points: [
        'Led design and modernization of multi-tenant payroll systems serving 5+ US enterprise clients across healthcare and government sectors',
        'Improved API response times by ~35% through SQL optimization and asynchronous processing', 
        'Refactored/Migrated legacy .NET Framework modules to .NET 8, increasing stability and maintainability',
        'Built reusable Web API components supporting multi-tenant architecture for 2 major enterprise clients', 
        'Mentored 4+ junior developers on code reviews, code quality and clean architecture (SOLID principles)'
      ],
      projects: [
        { title: 'Core TLM', description: 'Description 1' },
        { title: 'Business Reports', description: 'Description 2' },
      ],
      }, {
        name: 'TELUS Digital',
        designation: 'Senior Software Engineer',
        startDate: '04th February, 2026',
        endDate: 'Till Date',
        isCurrent: true,
        logoUrl: 'assets/img/telus.png',  
        points: [
        'Led design and modernization of multi-tenant payroll systems serving 5+ US enterprise clients across healthcare and government sectors',
        'Improved API response times by ~35% through SQL optimization and asynchronous processing', 
        'Refactored/Migrated legacy .NET Framework modules to .NET 8, increasing stability and maintainability',
        'Built reusable Web API components supporting multi-tenant architecture for 2 major enterprise clients', 
        'Mentored 4+ junior developers on code reviews, code quality and clean architecture (SOLID principles)'
      ],
      projects: [
        { title: 'Pension Profile', description: 'Description 1' }
      ],
      }
    ]as Company[];
  }

}
