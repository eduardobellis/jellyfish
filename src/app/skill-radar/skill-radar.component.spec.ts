import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRadarComponent } from './skill-radar.component';

describe('SkillRadarComponent', () => {
  let component: SkillRadarComponent;
  let fixture: ComponentFixture<SkillRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
