import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp:RegExp = /-/g; // expressão regular com g - global para pegar todos os "-" e não só o primeiro
        const date = new Date(this.inputData.value.replace(exp,',')); // usa a expressão regex criada e substitui '-' por ','
        // A data é criada com o pattern 'yyyy,mm,dd'
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value) 
        return new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }



}