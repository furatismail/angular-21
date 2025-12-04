import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleContainer } from './toggle-container';

describe('ToggleContainer', () => {
  let component: ToggleContainer;
  let fixture: ComponentFixture<ToggleContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
