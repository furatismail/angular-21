import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectHttp } from './effect-http';

describe('EffectHttp', () => {
  let component: EffectHttp;
  let fixture: ComponentFixture<EffectHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
