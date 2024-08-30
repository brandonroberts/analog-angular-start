import {
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: '', pathMatch: 'full', loadComponent: () => import('./pages/index.page.analog') },
      { path: '**', loadComponent: () => import('./pages/index.page.analog') }
    ]),
    provideHttpClient(
      withFetch(),
    ),
    provideClientHydration()
  ],
};
