import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIcons } from './social-media-icons';

describe('SocialMediaIcons', () => {
  let component: SocialMediaIcons;
  let fixture: ComponentFixture<SocialMediaIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
