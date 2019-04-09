import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Especie } from '../../model/clases/Especie.model';
import { SelectItem } from '../../model/clases/SelectItem.model';

@Component({
  templateUrl: 'Especies.component.html'
})
export class EspeciesComponent {

  constructor( ) {
    this.consultarListadosValores();
   }

  public especies: Array<Especie> = [];
  
  public soloFamilias: Array<SelectItem> = [];
  public soloGeneros: Array<SelectItem> = [];
  public soloEspecies: Array<SelectItem> = [];
  public soloAutores: Array<SelectItem> = [];
  public sinonimos:Array<SelectItem> = [];
  
  public addespecie : Especie;
  public addespecieNoIncluida : Especie;

  public consultarListadosValores(){
    this.consultarEspeciesTabla();
    this.cofigurarGeneros();
  }


  public consultarEspeciesTabla(){
    this.especies=[];
    this.addespecie=new Especie();
    this.addespecieNoIncluida=new Especie();
  }
  public cofigurarGeneros(){
    
  }


}
