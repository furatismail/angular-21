import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: "dashboard",
        component: Dashboard
    },
    {
        path: "settings",
        loadChildren: () => import('./pages/settings/settings.routes').then(routes => routes.SettingsRoute)
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/about/about.routes').then((route) => route.AboutRoutes)
    }
];
