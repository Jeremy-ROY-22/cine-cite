const categoryData = {
    "western": { title: "Western", desc: "La zone des pionniers, des saloons et des déserts arides." },
    "fantaisie": { title: "Fantaisie", desc: "Un monde de châteaux magiques et de créatures légendaires." },
    "aventure": { title: "Aventure", desc: "Retrouvez l'esprit de Jurassic Park et les navires pirates." },
    "scifi": { title: "Science-Fiction", desc: "Gratte-ciels futuristes et technologies avancées." },
    "peplm": { title: "Péplum", desc: "L'Antiquité romaine avec son Colisée majestueux." },
    "animation": { title: "Animation", desc: "L'univers coloré des films d'animation et la maison de Là-Haut." },
    "horreur": { title: "Horreur", desc: "Manoirs hantés et zones brumeuses pour les plus braves." },
    "superhero": { title: "Super-Héros", desc: "Le quartier général des Avengers et des justiciers." },
    "espionnage": { title: "Espionnage", desc: "Gadgets secrets et voitures de luxe haute performance." },
    "centre": { title: "Le Cinéma", desc: "Le point central de Cine-Cité." }
};

const container = document.getElementById('map-container');
const revealPath = document.getElementById('reveal-path');
const zones = document.querySelectorAll('.map-zone');

// 1. ZOOM & PAN
// On initialise Panzoom sur le conteneur 5K
const panzoom = Panzoom(container, {
    maxScale: 2,
    minScale: 0.1,
    contain: 'outside',
    canvas: true
});

// Ajustement automatique au chargement pour voir toute la carte
setTimeout(() => {
    const zoomLevel = window.innerWidth / 5761; // Calcule le ratio selon ton écran
    panzoom.zoom(zoomLevel, { animate: true });
    panzoom.pan(0, 0);
}, 200);

container.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// 2. LOGIQUE DES ZONES
zones.forEach(zone => {
    const parentId = zone.parentElement.id; // Récupère l'id du groupe <g>

    // Hover : On révèle la couleur
    zone.addEventListener('mouseenter', () => {
        const d = zone.getAttribute('d');
        revealPath.setAttribute('d', d); // On injecte le tracé dans le masque
    });

    // Sortie : On cache la couleur
    zone.addEventListener('mouseleave', () => {
        revealPath.setAttribute('d', 'M 0 0 Z');
    });

    // Clic : On affiche le panneau
    zone.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = categoryData[parentId];
        if (data) {
            document.getElementById('cat-title').innerText = data.title;
            document.getElementById('cat-desc').innerText = data.desc;
            const panel = document.getElementById('details-panel');
            panel.classList.remove('hidden');
            setTimeout(() => panel.classList.add('active'), 10);
        }
    });
});

// Fermer le panneau
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('details-panel').classList.remove('active');
});