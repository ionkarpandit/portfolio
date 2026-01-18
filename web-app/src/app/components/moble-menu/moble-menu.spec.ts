import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobleMenu } from './moble-menu';

describe('MobleMenu', () => {
  let component: MobleMenu;
  let fixture: ComponentFixture<MobleMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobleMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobleMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
