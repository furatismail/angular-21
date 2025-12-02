import { Routes } from "@angular/router";

export const SettingsRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview').then((component) => component.Overview),
        children: [
            {
                path: 'panel',
                loadComponent: () => import('./panel/panel').then((component) => component.Panel),
            },
            {
                path: 'statistics',
                loadComponent: () => import('./statistics/statistics').then((component) => component.Statistics),
            }
        ]
    }
]