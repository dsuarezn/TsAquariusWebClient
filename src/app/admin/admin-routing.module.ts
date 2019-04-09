import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { MarcomuestralComponent } from './marco/Marcomuestral.component';
import { ListasValoresComponent } from './listas/ListasValores.component';
import { EspeciesComponent } from './especies/Especies.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Paginas de administración'
    },
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Administración de usuarios'
        }
      },
      {
        path: 'marco',
        component: MarcomuestralComponent,
        data: {
          title: 'Gestión del Marco muestral'
        }
      },
      {
        path: 'listas',
        component: ListasValoresComponent,
        data: {
          title: 'Administración de listas '
        }
      }
      ,
      {
        path: 'especies',
        component:  EspeciesComponent,
        data: {
          title: 'Administración de especies'
        }
      }
      ,
      {
        path: 'asignaciones',
        component:  AsignacionesComponent,
        data: {
          title: 'Administración de especies'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPagesRoutingModule {}
