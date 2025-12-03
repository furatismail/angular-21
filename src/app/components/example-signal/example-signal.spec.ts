import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSignal } from './example-signal';

describe('ExampleSignal', () => {
  let component: ExampleSignal;
  let fixture: ComponentFixture<ExampleSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
