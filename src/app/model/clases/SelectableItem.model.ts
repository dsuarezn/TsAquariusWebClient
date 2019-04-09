
export class SelectableItem {
    nombre:string;
    codigo:string;
    tipo:string;
    selected:boolean;

    constructor(name:string, code:string, select:boolean){
        this.nombre=name;
        this.codigo=code;
        this.selected=select;
    }

}

export default SelectableItem;