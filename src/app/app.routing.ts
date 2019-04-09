import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './publicpages/login/index';
import { AuthGuard } from './guards/index';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [      
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }       
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Public'
    },
    children: [
      {
        path: 'publicpages',
        loadChildren: './publicpages/PublicPages.module#PublicPagesModule',
      }      
    ]
  },
  {
    path: '**',
    redirectTo:"/publicpages/404"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
