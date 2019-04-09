
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { P404Component } from './404/404.component';
import { P500Component } from './500/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



import { PublicPagesRoutingModule } from './PublicPages-routing.module';

@NgModule({
  imports: [
    CommonModule,  
    FormsModule,
    PublicPagesRoutingModule 
  ],
  declarations: [    
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
    
  ]
})
export class PublicPagesModule { }
