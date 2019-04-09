
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  MatCheckboxModule, 
  MatSelectModule, 
  MatCardModule, 
  MatListModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatAutocompleteModule
} from '@angular/material';

import { UsersComponent } from './users/users.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { MarcomuestralComponent } from './marco/Marcomuestral.component';
import { ListasValoresComponent } from './listas/ListasValores.component';
import { EspeciesComponent } from './especies/Especies.component';
import { PublicPagesRoutingModule } from './admin-routing.module';
import { MultipleChecklistSelect } from '../appComponents/multiple-checklist-select/multiple-checklist-select.component';


@NgModule({
  imports: [
    CommonModule,  
    FormsModule,
    PublicPagesRoutingModule,
    MatCheckboxModule, 
    MatSelectModule,    
    MatListModule,
    MatCardModule, 
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule
    
  ],
  declarations: [    
    UsersComponent, 
    MarcomuestralComponent, 
    ListasValoresComponent, 
    EspeciesComponent, 
    AsignacionesComponent,
    MultipleChecklistSelect
  ]
})
export class AdminModule { }
