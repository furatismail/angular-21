import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: "dashboard",
        component: Dashboard
    },
    {
        path: "settings",
        loadChildren: () => import('./pages/settings/settings-module').then(module => module.SettingsModule)
    },
    {
        path: "team",
        loadComponent: () => import('./pages/about/team/team').then(component => component.Team)
    }
];
