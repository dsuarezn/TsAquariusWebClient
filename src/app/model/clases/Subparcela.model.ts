

import {PuntoReferencia} from '../clases/PuntoReferencia.model'


import {Cobertura} from '../clases/Cobertura.model'

import {Perturbacion} from '../clases/Perturbacion.model'

import {CoordenadasSubp} from '../clases/CoordenadasSubp.model'
import {Pendientes} from '../clases/Pendientes.model'


export class Subparcela { 
    constructor(iden:number){        
        this.id=iden;
    }
    
    id: number;
    latitud?: string;
    longitud?: string;
    observaciones?:string;
    establecida?:boolean;
    error?:string;

    pendiente1?:string;
    pendiente2?:string;
    pendiente3?:string;
    pendiente4?:string;
    pendiente5?:string;
    pendiente6?:string;
    pendiente7?:string;
    pendiente8?:string;

    coberturas?: Array<Cobertura>;
    perturbaciones?: Array<Perturbacion>;
    puntosref?:Array<PuntoReferencia>;
  
    public initPuntosRef(){        
        this.puntosref = [
            new PuntoReferencia()
          ];
    }

    public initCoberturas(){        
        this.coberturas = [
            new Cobertura()
          ];
    }


    public initPerturbaciones(){        
        this.perturbaciones = [
            new Perturbacion()
          ];
    }

    public initComponent(){
        this.initPuntosRef();
        this.initCoberturas();
        this.initPerturbaciones();
    }

    public agregarPuntoRef(){
        this.puntosref.push(new PuntoReferencia());
    }

    public agregarCobertura(){
        this.coberturas.push(new Cobertura());
    }

    
    public agregarPerturbacion(){
        this.perturbaciones.push(new Perturbacion());
    }

} 