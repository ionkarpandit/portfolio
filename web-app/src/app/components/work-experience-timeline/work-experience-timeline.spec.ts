import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceTimeline } from './work-experience-timeline';

describe('WorkExperienceTimeline', () => {
  let component: WorkExperienceTimeline;
  let fixture: ComponentFixture<WorkExperienceTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
