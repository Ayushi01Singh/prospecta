import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', redirectTo: 'information', pathMatch : 'full'},
    { path: 'information', loadChildren: () => import('./information/information.module').then(m => m.InformationModule)}
   
];
