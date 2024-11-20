const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
let lastScrollTop = 0; // Posição anterior do scroll

// Função para abrir e fechar o menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Fecha o menu ao clicar em um link
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show'); // Fecha o menu ao clicar no link
    });
});

// Efeito de esconder o menu enquanto rola para baixo
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Rolando para baixo
    if (currentScroll > lastScrollTop) {
        // Esconde o menu, movendo para cima
        header.style.top = "-80px"; // Ajuste a distância para o menu desaparecer
    } else {
        // Rolando para cima
        header.style.top = "0"; // Exibe o menu novamente
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Atualiza a posição do scroll
});

document.addEventListener('DOMContentLoaded', () => {
    // Configurar animações para cada seção
    ScrollReveal().reveal('#home', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('.welcome-container', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('#about', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('.about-row', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        interval: 200, // Anima os itens em sequência
        reset: true
    });

    ScrollReveal().reveal('.about-row', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        interval: 200, // Anima os itens em sequência
        reset: true
    });


    ScrollReveal().reveal('.projects-header', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('.project-card', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        interval: 200, // Anima os itens em sequência
        reset: true
    });

    ScrollReveal().reveal('.footer', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('.footer-logo', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: true
    });

    ScrollReveal().reveal('.footer-contact', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: true
    });
});



//Carroceu 

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.project-card');
const btnLeft = document.querySelector('.carousel-button.left');
const btnRight = document.querySelector('.carousel-button.right');

// Largura de um cartão + margem
const cardWidth = cards[0].offsetWidth + 20; // Inclui gap
let currentPosition = 0;

// Função para atualizar o carrossel
function updateCarousel() {
    track.style.transform = `translateX(-${currentPosition}px)`;
}

// Botão para mover para a esquerda
btnLeft.addEventListener('click', () => {
    currentPosition = Math.max(currentPosition - cardWidth, 0);
    updateCarousel();
});

// Botão para mover para a direita
btnRight.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.offsetWidth;
    currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
    updateCarousel();
});

// Adicionar suporte para arrastar no mobile
let isDragging = false;
let startX, scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => (isDragging = false));
track.addEventListener('mouseup', () => (isDragging = false));
track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arrasto
    track.scrollLeft = scrollLeft - walk;
});

// Suporte para touch
track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
});

track.addEventListener('touchend', () => (isDragging = false));
