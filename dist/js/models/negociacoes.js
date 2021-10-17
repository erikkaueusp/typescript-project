export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];; <- forma alternativa
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //array para somente leitura, não podendo usar metodos externos como push o pop.
    lista() {
        // podemos usar tambem readonly Negociacao
        return this.negociacoes;
    }
}
