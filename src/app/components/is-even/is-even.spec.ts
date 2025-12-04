import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEven } from './is-even';

describe('IsEven', () => {
  let component: IsEven;
  let fixture: ComponentFixture<IsEven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsEven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsEven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
