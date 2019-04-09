
import {MedioAcceso} from '../clases/MedioAcceso.model'
import {PuntoReferencia} from '../clases/PuntoReferencia.model'



class RutaCampamento { 
    constructor(){

        this.mediosAcceso = [
            {medio: 'Terrestre (S/N)', tiempo: '',  distancia: ''},
            {medio: 'Fluvial (S/N)', tiempo: '',  distancia: ''},
            {medio: 'Aéreo (S/N)', tiempo: '',  distancia: ''}   
        ]
        
        this.puntosReferencia =[
            {puntoref: '', latitud: '',  longitud: '', error:''},
            {puntoref: '', latitud: '',  longitud: '', error:''},
            {puntoref: '', latitud: '',  longitud: '', error:''},
            {puntoref: '', latitud: '',  longitud: '', error:''}
        ]

    }
    mediosAcceso ?: Array<MedioAcceso>;
    puntosReferencia ?: Array<PuntoReferencia>;
} 