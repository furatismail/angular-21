import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Time } from './time';

export const TIME_START_DATE = new InjectionToken<string>('TIME_START_DATE')

@NgModule({
  declarations: [Time],
  imports: [
    CommonModule
  ],
  exports: [Time]
})
export class TimeModule { 
  static register(startDate: string): ModuleWithProviders<TimeModule> {
    return {
      ngModule: TimeModule,
      providers: [
        {
          provide: TIME_START_DATE,
          useValue: startDate
        }
      ]
    }
  }
}
