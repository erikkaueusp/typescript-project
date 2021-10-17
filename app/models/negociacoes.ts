import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }


    //array para somente leitura, não podendo usar metodos externos como push o pop.
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }


}