import {
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: '', pathMatch: 'full', loadComponent: () => import('./pages/index.page') },
      { path: '**', loadComponent: () => import('./pages/index.page') }
    ]),
    provideHttpClient(
      withFetch(),
    ),
  ],
};
