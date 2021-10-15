export class Negociacao {
    private _data:string;
    private _quantidade:string;
    private _valor:string;

    constructor(data,quantidade,valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    
    public get data() : string {
        return this._data;
    }

    public get quantidade() :string {
        return this._quantidade;
    }
    
    
    public get valor() : string {
        return this._valor;
    }
    

}