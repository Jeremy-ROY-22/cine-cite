// Ton catalogue de données (à remplir selon tes envies)
const categoryData = {
    "western": { title: "Le Grand Ouest", desc: "La zone des pionniers et des cowboys..." },
    "scifi": { title: "Science-Fiction", desc: "Des gratte-ciels futuristes et la Tour Avengers..." },
    "aventure": { title: "Aventure", desc: "L'antre de Jurassic Park et du Black Pearl..." },
    "fantaisie": { title: "Fantaisie", desc: "Le royaume des châteaux et de la magie..." },
    "peplm": { title: "Péplum", desc: "Rome et le Colisée en plein désert..." },
    "animation": { title: "Animation", desc: "La maison de Là-Haut et les mondes colorés..." },
    "horreur": { title: "Horreur", desc: "Les manoirs hantés et zones sombres..." },
    "superhero": { title: "Super-Héros", desc: "Le QG des Avengers..." },
    "espionnage": { title: "Espionnage", desc: "Les gadgets et voitures secrètes..." },
    "centre": { title: "Le Cinéma", desc: "Le cœur de Cine-Cité..." }
};

const container = document.getElementById('map-container');
const colorLayer = document.getElementById('color-layer');
const zones = document.querySelectorAll('.map-zone');

// 1. ZOOM & PAN
const panzoom = Panzoom(container, { maxScale: 8, minScale: 1, contain: 'outside' });
container.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// 2. RÉVÉLATION ET CLIC
zones.forEach(zone => {
    const id = zone.parentElement.id; // On récupère l'ID du groupe <g>

    zone.addEventListener('mouseenter', () => {
        const d = zone.getAttribute('d');
        colorLayer.style.clipPath = `path("${d}")`;
    });

    zone.addEventListener('mouseleave', () => {
        colorLayer.style.clipPath = `path("M 0 0 L 0 0 Z")`;
    });

    zone.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = categoryData[id];
        if (data) {
            document.getElementById('cat-title').innerText = data.title;
            document.getElementById('cat-desc').innerText = data.desc;
            document.getElementById('details-panel').classList.remove('hidden');
            setTimeout(() => document.getElementById('details-panel').classList.add('active'), 10);
        }
    });
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('details-panel').classList.remove('active');
});