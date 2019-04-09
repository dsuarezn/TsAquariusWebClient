import { Component } from '@angular/core';
import { SelectableItem } from '../../model/clases/SelectableItem.model';

@Component({
  selector: 'multiple-checklist-select',
  templateUrl: './multiple-checklist-select.component.html'
})
export class MultipleChecklistSelect { 

  public elementos : Array<SelectableItem> = [];
  public tituloLista:string;
  
  constructor(){

    this.consultarListadosValores();
    this.tituloLista="Seleccione los permisos del usuario";
  }

  public consultarListadosValores(){
    this.consultarElementos();
           
  }

  public itemSelect(event, item:SelectableItem) {
    item.selected=(item.selected===false?true:false);
  }


  public consultarElementos(){
      this.elementos.push(new SelectableItem('Gestión de usuarios','guser', false));
      this.elementos.push(new SelectableItem('Generación de información etiquetas','genlab', false));
      this.elementos.push(new SelectableItem('Copias de seguridad','backup', false));
      this.elementos.push(new SelectableItem('Generación de información','geninf', false));
      this.elementos.push(new SelectableItem('Carga de información','loadinf', false));
      this.elementos.push(new SelectableItem('Borrado de información','delinf', false));
      this.elementos.push(new SelectableItem('Creación series basicas','cbasica', false));
      this.elementos.push(new SelectableItem('Creación derivadas estadísticas','cdevest', false));
      this.elementos.push(new SelectableItem('Creación derivadas calculadas','cdevcal', false));
      this.elementos.push(new SelectableItem('Creación derivadas transferencia','cdevtran', false));
      this.elementos.push(new SelectableItem('Borrar series','eraseries', false));
      this.elementos.push(new SelectableItem('Borrar estaciones','eraseloc', false));
      this.elementos.push(new SelectableItem('Configuración del sistema','configsys', false));
  }

}