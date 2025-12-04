import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedEquality } from './computed-equality';

describe('ComputedEquality', () => {
  let component: ComputedEquality;
  let fixture: ComponentFixture<ComputedEquality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedEquality]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedEquality);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
