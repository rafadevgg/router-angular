import { Routes } from '@angular/router';
import { ListaUsers } from './views/lista-users/lista-users';
import { ListaPosts } from './views/lista-posts/lista-posts';
import { NotFound } from './views/not-found/not-found';
import { EditarPost } from './views/editar-post/editar-post';

export const routes: Routes = [
    {path: '', component: ListaUsers},
    {path: 'posts/:id', component: ListaPosts},
    {path: 'posts', component: ListaPosts},
    {path: 'post/:id', component: EditarPost},
    {path: '**', component: NotFound}
];
