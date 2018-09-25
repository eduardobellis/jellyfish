import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentadionsComponent } from './recommentadions.component';

describe('RecommentadionsComponent', () => {
  let component: RecommentadionsComponent;
  let fixture: ComponentFixture<RecommentadionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommentadionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommentadionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
