import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMaskTimerComponent } from './current-mask-timer.component';

describe('CurrentMaskTimerComponent', () => {
  let component: CurrentMaskTimerComponent;
  let fixture: ComponentFixture<CurrentMaskTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMaskTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMaskTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
