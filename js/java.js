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