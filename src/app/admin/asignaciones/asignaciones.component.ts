import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Asignaciones } from '../../model/clases/Asignaciones.model';

import { SelectItem } from '../../model/clases/SelectItem.model';

@Component({
  templateUrl: 'asignaciones.component.html'
})
export class AsignacionesComponent {

  constructor( ) {
    this.consultarListadosValores();
   }

  

  public asignaciones : Array<Asignaciones> = [];

  public conglomerados : Array<SelectItem> = [];
  public usuarios : Array<SelectItem> = [];
  public vigencias : Array<SelectItem> = [];

  public selectedItemUsuarios:SelectItem=null;
  public selectedItemConglomerado:SelectItem=null;
  public selectedItemVigencia:SelectItem=null;

  public consultarListadosValores(){
    this.consultarUsuarios();
    this.consultarConglomerados();
    this.consultarVigencias();
  }


  public consultarUsuarios(){
      this.usuarios.push(new SelectItem('Dsuarez','dsuarez'));
      this.usuarios.push(new SelectItem('Sinchi1','sinchi1'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
      this.usuarios.push(new SelectItem('Iiap01','iiap01'));
  }

  public consultarConglomerados(){
    this.conglomerados.push(new SelectItem('000123','000123'));
    this.conglomerados.push(new SelectItem('000423','000423'));
    this.conglomerados.push(new SelectItem('030423','030423'));
    this.conglomerados.push(new SelectItem('035423','035423'));
    this.conglomerados.push(new SelectItem('036423','036423'));
    this.conglomerados.push(new SelectItem('037423','037423'));
    this.conglomerados.push(new SelectItem('047423','047423'));
    this.conglomerados.push(new SelectItem('057423','057423'));
    this.conglomerados.push(new SelectItem('067423','067423'));
  }

  public consultarVigencias(){
    this.vigencias.push(new SelectItem('2015','2015'));
    this.vigencias.push(new SelectItem('2016','2016'));
    this.vigencias.push(new SelectItem('2017','2017'));
    this.vigencias.push(new SelectItem('2018','2018'));
  }

  listaUsuariosClick(event, newValue) {    
    this.selectedItemUsuarios = newValue;
  }


  listaConglomeradosClick(event, newValue) {    
    this.selectedItemConglomerado = newValue;
  }


  listaVigenciasClick(event, newValue) {    
    this.selectedItemVigencia = newValue;
  }
  
}
