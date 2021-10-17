import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = [];; <- forma alternativa
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }


    //array para somente leitura, não podendo usar metodos externos como push o pop.
    lista(): ReadonlyArray<Negociacao> {
        // podemos usar tambem readonly Negociacao
        return this.negociacoes;
    }


}