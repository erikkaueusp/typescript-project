import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault(); // impede que após o submit a pagina seja atualizada
    controller.adiciona();
});
// instanciamos o Negociacaocontroller -> toda vez que chamar o submit -> executa o metodo adiciona