export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //array para somente leitura, não podendo usar metodos externos como push o pop.
    lista() {
        return this.negociacoes;
    }
}
