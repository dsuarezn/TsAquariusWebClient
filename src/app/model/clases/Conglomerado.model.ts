import {CoordenadasSubp} from '../clases/CoordenadasSubp.model'
import {Subparcela} from '../clases/Subparcela.model'

export class Conglomerado {
    
         constructor(){
            this.initComponent();
         }
 
         jefe: string;
         botanico: string;
         tecnico: string;
         coinvestigador: string;
         region: string;
         caserio: string;
         depto: string;
         rancheria: string;
         mcipio: string;
         resguardo: string;
         vereda: string;
         consejo: string;
         corregimiento: string;
         car: string;
         inspeccion: string;
         otro: string;
         nombreContacto: string;
         telefono: string;
         observaciones: string;
         fechaIni:Date;
         fechaFin:Date;

         coordenadasSubp?: Array<CoordenadasSubp>;
        

  
         public initComponent(){            
            this.coordenadasSubp = [
                new CoordenadasSubp(1),
                new CoordenadasSubp(2),
                new CoordenadasSubp(3),
                new CoordenadasSubp(4),
                new CoordenadasSubp(5)
              ];
        }

      }