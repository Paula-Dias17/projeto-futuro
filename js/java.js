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


//pedrina
// const imgs = ["./img/perfil_paula2 (1)", "./img/perfil_paula2 (2)"]
// let pos = 0;
// const carrossel = document.querySelector("#perfil");
// anterior = () =>{
//     if (pos - 1 >= 0){
//         pos = pos - 1;
//         url_img = imgs[pos]
//         carrossel.attributes[1].value = url_img;
//     } 
//     carrossel.src = imgs[pos];
//     contador.innerHTML = `${pos + 1}/${imgs.length}`;
// }

// proxima = () =>{
//     if (pos + 1 > imgs.length-1){
//         pos = 0
//     }else{
//         pos = pos + 1;                
//     }
//     url_img = imgs[pos]
//     carrossel.attributes[1].value = url_img;
//     contador.innerHTML = `${pos+1}/${imgs.length}`;
// }

// setInterval(() => {
//     proxima();
// }, 3000); 

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
