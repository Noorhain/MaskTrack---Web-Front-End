import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMaskComponent } from './current-mask.component';

describe('CurrentMaskComponent', () => {
  let component: CurrentMaskComponent;
  let fixture: ComponentFixture<CurrentMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
