import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesViews } from "../views/negociacoes-views.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesViews('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
        console.log("oi");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        // 0 significa domingo e 6 significa saabado, logo so atualiza dias uteis
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }
        else {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
        }
    }
    criaNegociacao() {
        const exp = /-/g; // expressão regular com g - global para pegar todos os "-" e não só o primeiro
        const date = new Date(this.inputData.value.replace(exp, ',')); // usa a expressão regex criada e substitui '-' por ','
        // A data é criada com o pattern 'yyyy,mm,dd'
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
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
