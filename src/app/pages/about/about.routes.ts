import { Routes } from "@angular/router"

export const AboutRoutes: Routes = [
    {
        path: 'team',
        loadComponent: () => import('./team/team').then((component) => component.Team)
    },
     {
        path: 'company',
        loadComponent: () => import('./company/company').then((component) => component.Company)
    },
    {
        path: '',
        redirectTo: 'company',
        pathMatch: "full"
    }
]