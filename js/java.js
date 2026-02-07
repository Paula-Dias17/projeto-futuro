const itens = document.querySelectorAll('.item');

itens.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});



// coisa do chat
const links = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
}
});


// poli
const numeros = document.querySelectorAll('.interacao');

// para cada card
numeros.forEach(contato => {
    contato.addEventListener('mouseenter', () => {
        contato.classList.add('hovered');
    });

    contato.addEventListener('mouseleave', () => {
        contato.classList.remove('hovered');
    });
});


//chat
const imgs = [
  "./img/perfil_paula2 (1).jpeg",
  "./img/perfil_paula2 (2).jpeg"
];

let pos = 0;
const carrossel = document.querySelector("#perfil");

anterior = () => {
    if (pos - 1 >= 0) {
        pos--;
    } else {
        pos = imgs.length - 1;
    }

    carrossel.src = imgs[pos];
    contador.innerHTML = `${pos + 1}/${imgs.length}`;
}

proxima = () => {
    pos = (pos + 1) % imgs.length;
    carrossel.src = imgs[pos];
    contador.innerHTML = `${pos + 1}/${imgs.length}`;
}

// ⏱️ troca automática
setInterval(() => {
    proxima();
}, 3000);


function CriarCarrossel(imagens, elementos, intervalo) {
    let inicio = 0;

    function atualizar() {
        elementos.forEach((el, i) => {
            const index = (inicio + i) % imagens.length;

            el.classList.add("troca");

            setTimeout(() => {
                el.src = imagens[index];
                el.classList.remove("troca");
            }, 200);
        });
    }

    function proxima() {
        inicio = (inicio + 1) % imagens.length;
        atualizar();
    }

    function anterior() {
        inicio = (inicio - 1 + imagens.length) % imagens.length;
        atualizar();
    }

    atualizar();
    setInterval(proxima, intervalo);

    return { proxima, anterior };
}

const obras = [
    "./img/obras/arte (1).png",
    "./img/obras/arte (3).png",
    "./img/obras/arte (4).png",
    "./img/obras/arte (5).png",
    "./img/obras/arte (6).png",
    "./img/obras/arte (7).png"
];

const carrosselArtes = document.querySelectorAll(".artes");

const artes = CriarCarrossel(obras, carrosselArtes, 4500);

document.querySelector(".seta-esquerda").onclick = artes.anterior;
document.querySelector(".seta-direta").onclick = artes.proxima;



const items = document.querySelectorAll(".qtd");
const carrinho = document.querySelector("#carrinho");
for (i of items){
    i.addEventListener("input", () =>{
        carrinho.innerHTML = "";
        items.forEach(p =>{
            const qtd = Number(p.value);
            const valor = Number(p.dataset.preco);
            const nome = p.dataset.nome;
            if (qtd>0){
                const li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerHTML = `${nome} * ${qtd} = ${valor * qtd}`
                carrinho.appendChild(li);
            }
        })
    })
}

const form = document.querySelector("#formCarrinho");
const resultado = document.querySelector("#resultado");
form.addEventListener("submit", e => {
    e.preventDefault();
    let total = 0;
    items.forEach(p =>{
        const qtd = Number(p.value);
        const valor = Number(p.dataset.preco);
        total += qtd * valor;
    })
    total = total * 0.9;
    resultado.classList.remove("d-none");
    resultado.innerHTML = `Total a pagar com desconto de 10% = R$ ${total}`;
}); 