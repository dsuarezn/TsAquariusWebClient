import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/clases/User.model';
import { SelectItem } from '../../model/clases/SelectItem.model';
import { MultipleChecklistSelect } from '../../appComponents/multiple-checklist-select/multiple-checklist-select.component';


@Component({
  templateUrl: 'users.component.html', 
  styleUrls: ['users.component.css']  
})
export class UsersComponent {

  constructor( ) {
    this.consultarListadosValores();
   }

  public personas: Array<User> = [];  
  public generos : Array<String> = [];
  
  public editVisible=false;

  
  public consultarListadosValores(){
    this.consultarUsuariosTabla();
    this.cofigurarGeneros();
    
  }


  public consultarUsuariosTabla(){

  }

  public clickEdicionUsuario(){
      this.editVisible=true;
  }


  public clickEdicionFinalizada(){
    this.editVisible=false;
}
  
  public cofigurarGeneros(){
    this.generos.push("Masculino");
    this.generos.push("Femenino");
  }

  

  
}
