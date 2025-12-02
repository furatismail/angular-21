import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TIME_START_DATE } from './components/time/time-module';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)), 
    provideClientHydration(withEventReplay()),
    {provide: TIME_START_DATE, useValue: '1990-12-12'}
  ]
};
