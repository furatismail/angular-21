import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchFree } from './glitch-free';

describe('GlitchFree', () => {
  let component: GlitchFree;
  let fixture: ComponentFixture<GlitchFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlitchFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlitchFree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
