import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sobre',
        loadComponent: () => import('./components/about/about.component')
        .then(c => c.AboutComponent)
    },
    {
        path: 'servicos',
        loadComponent: () => import('./components/servicos/servicos.component')
        .then(c => c.ServicosComponent)
    },
    {
        path: 'contato',
        loadComponent: () => import('./components/contato/contato.component')
        .then(c => c.ContatoComponent)
    },
    {
        path: '',
        loadComponent: () => import('./components/home/home.component')
        .then(c => c.HomeComponent)
    },
    
]
;
