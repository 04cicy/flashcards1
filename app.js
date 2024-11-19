function criaCartao(caregaria, perginta, resposta)
let cartao = document.createElement("article")
cartao.className = "cartao"
cartao.innerHTML = `
<div class="cartao_conteudo"
                   <h3>${categoria}</h3>
                   <div class="cartao_conteudo_pergonta">
                       <p>${pergunta}</p>
                       </div>
                            <div class="cartao_conteudo_resposta">
                                <p>${pergunta}</p>
                           </div>

               </div>
`
   let respostaEstaVisivel = false
   function viraCartao(){
   }
   let container = document.getElementById("container")
   container.appendChild(cartao)