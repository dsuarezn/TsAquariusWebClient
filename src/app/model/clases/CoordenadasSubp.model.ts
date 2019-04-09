
export class CoordenadasSubp {
    constructor(identificador){
        this.id=identificador;
    }
/*
    constructor(codigosubp,latitud,longitud, observacion){
        this.codigosubp=codigosubp;
        this.latitud=latitud;
        this.longitud=longitud;
        this.observacion=observacion;
    }*/
    id:number;
    codigosubp:number;
    latitud?: string;
    longitud?: string;
    observacion?: string;
} 