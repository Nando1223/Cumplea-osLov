let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '0',
        width: '0',
        videoId: 'MA-UvkEfOVA',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': 'MA-UvkEfOVA'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player ready
}

const phrases = [
    "Porque tienes la risa más bonita del mundo.",
    "Por cómo me cuidas incluso cuando no me doy cuenta.",
    "Porque a tu lado cada día se siente como una aventura.",
    "Por la forma en que tus ojos brillan cuando hablas de lo que te gusta.",
    "Porque me haces ser una mejor versión de mí mismo.",
    "Por tu paciencia infinita y tu corazón gigante.",
    "Porque nadie me entiende tan bien como tú.",
    "Por los pequeños detalles que hacen que todo sea especial.",
    "Simplemente porque eres TÚ, y eres perfecta para mí.",
    "Porque mi lugar favorito en el mundo es a tu lado.",
    "Por cada beso que me das.",
    "Porque haces que los días grises se vuelvan brillantes.",
    "Por tu inteligencia y tu forma de ver la vida.",
    "Porque eres mi mejor amiga y mi amor.",
    "Por cómo me haces sentir en casa sin importar dónde estemos."
];

// Navegación de secciones
function showSection(sectionId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Mostrar sección específica
    if (sectionId === 'phrases') {
        document.getElementById('phrases-section').classList.add('active');
        loadNewPhrase();
    } else if (sectionId === 'wishes') {
        document.getElementById('wishes-section').classList.add('active');
    } else if (sectionId === 'moments') {
        document.getElementById('moments-section').classList.add('active');
    } else if (sectionId === 'music') {
        document.getElementById('music-section').classList.add('active');
    } else if (sectionId === 'main') {
        document.getElementById('main-menu').classList.add('active');
    }
}

function showMainMenu() {
    showSection('main');
}

// Abrir regalo inicial
document.getElementById('open-gift').addEventListener('click', () => {
    // Lanzar confeti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff758c', '#ff7eb3', '#ffd700', '#ffffff']
    });

    // Iniciar música
    if (player && player.playVideo) {
        player.playVideo();
    }

    // Cambiar a menú principal tras breve retraso
    setTimeout(() => {
        document.getElementById('welcome-screen').classList.remove('active');
        document.getElementById('main-menu').classList.add('active');
    }, 1000);
});

// Generador de frases
function loadNewPhrase() {
    const display = document.getElementById('phrase-display');
    display.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        display.innerText = phrases[randomIndex];
        display.style.opacity = 1;

        // Pequeño estallido de confeti al cambiar frase
        confetti({
            particleCount: 20,
            spread: 40,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#ff758c', '#ffd700']
        });
    }, 300);
}

document.getElementById('new-phrase-btn')?.addEventListener('click', loadNewPhrase);

// Prevenir scroll en móviles al interactuar
document.addEventListener('touchmove', function (e) {
    if (e.target.closest('.screen')) return;
    // e.preventDefault();
}, { passive: false });
