import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesViews } from "../views/negociacoes-views.js";

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesViews('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
        console.log("oi");
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        // 0 significa domingo e 6 significa saabado, logo so atualiza dias uteis
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
        } else {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
        }
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

    atualizaView() {

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Atualizado com sucesso!!!");

    }



}