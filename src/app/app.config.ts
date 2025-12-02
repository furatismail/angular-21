import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideTimeConfig } from './components/time/time.config';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)), 
    provideClientHydration(withEventReplay()),
    provideTimeConfig('1990-12-12')
  ]
};
