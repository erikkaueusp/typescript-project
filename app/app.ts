import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault(); // impede que após o submit a pagina seja atualizada
    controller.adiciona();
});
// instanciamos o Negociacaocontroller -> toda vez que chamar o submit -> executa o metodo adiciona


// Teste simples sobre a importancia do join, para não criar uma lista de <li>
// let vogais: string[] = ['a', 'e', 'i', 'o', 'u'];
// let template = `

//     <ul>
//         ${
//             vogais.map(vogal => 
//                 `
//                     <li>${vogal.toUpperCase()}</li>
//                 `
//             ).join('')
//         }
//     </ul>
// `;
// console.log(template);

// 	public vogais: getString[]() {
// 		return this.string[];
// 	}

// 	public void setString[](vogais: string[]) {
// 		this.string[] = string[];
// 	}

// 	public template get=() {
// 		return this.=;
// 	}

// 	public void set=(template =) {
// 		this.= = =;
// 	}

// 	public Object get<Ul>() {
// 		return this.<ul>;
// 	}

// 	public void set<Ul>(Object <ul>) {
// 		this.<ul> = <ul>;
// 	}

// 	public Object get${() {
// 		return this.${;
// 	}

// 	public void set${(Object ${) {
// 		this.${ = ${;
// 	}

// 	public => get() {
// 		return this.;
// 	}

// 	public void set(=> ) {
// 		this. = ;
// 	}

// 	public Object get`() {
// 		return this.`;
// 	}

// 	public void set`(Object `) {
// 		this.` = `;
// 	}

// 	public Object get<Li>${Vogal.ToUpperCase()}</Li>() {
// 		return this.<li>${vogal.toUpperCase()}</li>;
// 	}

// 	public void set<Li>${Vogal.ToUpperCase()}</Li>(Object <li>${vogal.toUpperCase()}</li>) {
// 		this.<li>${vogal.toUpperCase()}</li> = <li>${vogal.toUpperCase()}</li>;
// 	}

// 	public Object get`() {
// 		return this.`;
// 	}

// 	public void set`(Object `) {
// 		this.` = `;
// 	}

// 	public Object get).Join('')() {
// 		return this.).join('');
// 	}

// 	public void set).Join('')(Object ).join('')) {
// 		this.).join('') = ).join('');
// 	}

// 	public Object get}() {
// 		return this.};
// 	}

// 	public void set}(Object }) {
// 		this.} = };
// 	}

// 	public Object get</Ul>() {
// 		return this.</ul>;
// 	}

// 	public void set</Ul>(Object </ul>) {
// 		this.</ul> = </ul>;
// 	}

// 	public Object getConsole.Log(Template)() {
// 		return this.console.log(template);
// 	}

// 	public void setConsole.Log(Template)(Object console.log(template)) {
// 		this.console.log(template) = console.log(template);
// 	}
