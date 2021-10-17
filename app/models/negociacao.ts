export class Negociacao {
    // private _data:Date;
    // private _quantidade:number;
    // private _valor:number;

    // constructor(data:Date,quantidade:number,valor:number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    // Forma alternativa de declarar o construtor com atributos privados
    constructor(
        private _data:Date,
        private _quantidade:number,
        private _valor:number
    ) {}
    
    public get data() : Date {
        return this._data;
    }

    public get quantidade() : number {
        return this._quantidade;
    }
    
    
    public get valor() : number {
        return this._valor;
    }
    

}