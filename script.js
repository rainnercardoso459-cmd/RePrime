const container = document.querySelector("#produtos")
const cartCount = document.getElementById("cart-count")

let cart = 0

function render(lista){

container.innerHTML=""

lista.forEach(p=>{

container.innerHTML += `

<div class="card">

<img src="${p.imagem}">

<div class="info">

<h3>${p.nome}</h3>

<div class="price">R$${p.preco}</div>

<div class="stock">Últimos ${p.estoque} pares</div>

<button onclick="addCart()">Adicionar ao carrinho</button>

<a class="buy" href="produto.html?id=${p.id}">

Ver produto

</a>

</div>

</div>

`

})

}

function addCart(){

cart++
cartCount.innerText = cart

}

render(produtos)

document.getElementById("search").addEventListener("input",e=>{

const termo = e.target.value.toLowerCase()

const filtrado = produtos.filter(p=>p.nome.toLowerCase().includes(termo))

render(filtrado)

})
