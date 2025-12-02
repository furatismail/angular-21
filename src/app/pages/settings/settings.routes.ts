import { Routes } from "@angular/router";
import { provideTimeConfig } from "../../components/time/time.config";

export const SettingsRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview').then((component) => component.Overview),
        providers: [provideTimeConfig('2025-11-30')],
        children: [
            {
                path: 'panel',
                loadComponent: () => import('./panel/panel').then((component) => component.Panel),
                data: {preload: true}
            },
            {
                path: 'statistics',
                loadComponent: () => import('./statistics/statistics').then((component) => component.Statistics),
                data: {preload: true, preloadDelay: 4000}
            }
        ]
    }
]