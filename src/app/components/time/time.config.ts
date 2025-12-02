import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

export const TIME_START_DATE = new InjectionToken<string>('TIME_START_DATE')

export function provideTimeConfig(startDate: string) {
  return {
    provide: TIME_START_DATE,
    useValue: startDate
  }
}

