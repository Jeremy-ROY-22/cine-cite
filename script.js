/* --- 1. CATALOGUE DES DONNÉES --- */
const categoryData = {
    "western": { title: "Western", desc: "L'âge d'or des pionniers, des duels au soleil et des saloons poussiéreux." },
    "fantaisie": { title: "Fantaisie", desc: "Un royaume où la magie est reine, entre châteaux forts et créatures mythiques." },
    "aventure": { title: "Aventure", desc: "Des jungles de Jurassic Park aux ponts du Black Pearl, l'aventure vous attend." },
    "animation": { title: "Animation", desc: "Le monde merveilleux du dessin animé, de la maison de 'Là-Haut' aux studios Pixar." },
    "horreur": { title: "Horreur", desc: "Frissons garantis dans les manoirs hantés et les sous-bois brumeux." },
    "superhero": { title: "Super-Héros", desc: "Le centre de commandement des Avengers et des défenseurs de la Terre." },
    "scifi": { title: "Science-Fiction", desc: "Voyagez vers le futur, entre métropoles cyberpunk et vaisseaux spatiaux." },
    "peplm": { title: "Péplum", desc: "La splendeur de l'Antiquité, des temples grecs au Colisée de Rome." },
    "espionnage": { title: "Espionnage", desc: "Le monde du secret, des gadgets high-tech et des agents doubles." },
    "centre": { title: "Ciné Cité", desc: "Le cœur névralgique de la cité, là où tous les genres se rencontrent." }
};

const startTime = Date.now();

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const viewport = document.getElementById('viewport');
    
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 4000 - elapsedTime);

    setTimeout(() => {
        loader.classList.add('fade-out');
        viewport.classList.add('revealed');
        
        setTimeout(() => {
            const zoomLevel = window.innerWidth / 5761; 
            panzoom.zoom(zoomLevel, { animate: true });
            panzoom.pan(0, 0);
        }, 500);

    }, remainingTime);
});

/* --- 2. SÉLECTION DES ÉLÉMENTS --- */
const container = document.getElementById('map-container');
const colorLayer = document.getElementById('color-layer');
const revealPath = document.getElementById('reveal-path'); // Pour l'élément actif
const hoverPath = document.getElementById('hover-path');   // Pour le survol (NOUVEAU)
const zones = document.querySelectorAll('.map-zone');
const panel = document.getElementById('details-panel');

let fadeTimeout; 
let startMouseX, startMouseY; 
let currentOpenId = null;

/* --- 3. INITIALISATION DU ZOOM (PANZOOM) --- */
const panzoom = Panzoom(container, {
    maxScale: 2.5,
    minScale: 0.1,
    contain: 'outside',
    canvas: true
});

setTimeout(() => {
    const zoomLevel = window.innerWidth / 5761; 
    panzoom.zoom(zoomLevel, { animate: true });
    panzoom.pan(0, 0);
}, 200);

container.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

/* --- 4. LOGIQUE INTERACTIVE DES ZONES --- */
zones.forEach(zone => {
    const id = zone.parentElement.id;

    zone.addEventListener('mouseenter', () => {
        clearTimeout(fadeTimeout); 
        // On allume le masque de survol
        hoverPath.setAttribute('d', zone.getAttribute('d'));
        colorLayer.classList.add('active');
    });

    zone.addEventListener('mouseleave', () => {
        // On éteint le masque de survol
        hoverPath.setAttribute('d', 'M 0 0 Z');
        
        // On ne retire le fondu que si aucun panneau n'est ouvert
        if (currentOpenId === null) {
            colorLayer.classList.remove('active');
            fadeTimeout = setTimeout(() => {
                if (!colorLayer.classList.contains('active')) {
                    revealPath.setAttribute('d', 'M 0 0 Z');
                }
            }, 1500); 
        }
    });

    zone.addEventListener('click', (e) => {
        e.stopPropagation();

        const moveX = Math.abs(e.clientX - startMouseX);
        const moveY = Math.abs(e.clientY - startMouseY);
        if (moveX > 5 || moveY > 5) return; 

        // TOGGLE : Si on reclique sur la zone ouverte, on ferme tout
        if (panel.classList.contains('active') && currentOpenId === id) {
            panel.classList.remove('active');
            currentOpenId = null;
            revealPath.setAttribute('d', 'M 0 0 Z'); // On vide le masque actif
            colorLayer.classList.remove('active'); 
            return;
        }

        const data = categoryData[id];
        if (data) {
            if (e.clientX > window.innerWidth / 2) {
                panel.classList.add('left-side');
            } else {
                panel.classList.remove('left-side');
            }

            document.getElementById('cat-title').innerText = data.title;
            document.getElementById('cat-desc').innerText = data.desc;
            
            // Verrouille la zone active dans le masque principal
            currentOpenId = id; 
            revealPath.setAttribute('d', zone.getAttribute('d'));
            
            panel.classList.remove('hidden');
            setTimeout(() => panel.classList.add('active'), 10);
        }
    });
});

/* --- 5. FERMETURE DU PANNEAU --- */
document.getElementById('close-btn').addEventListener('click', () => {
    panel.classList.remove('active');
    currentOpenId = null; 
    colorLayer.classList.remove('active');
    
    setTimeout(() => {
        if (!panel.classList.contains('active')) {
            panel.classList.add('hidden');
            revealPath.setAttribute('d', 'M 0 0 Z'); 
            hoverPath.setAttribute('d', 'M 0 0 Z');
        }
    }, 500);
});

/* --- 6. TOGGLE MODE COULEUR --- */
const toggleBtn = document.getElementById('view-toggle');
let isFullColor = false;

toggleBtn.addEventListener('click', () => {
    isFullColor = !isFullColor;
    if (isFullColor) {
        colorLayer.classList.add('full-color-mode');
        container.classList.add('full-color-active');
        toggleBtn.style.background = "white";
        toggleBtn.style.color = "black";
    } else {
        colorLayer.classList.remove('full-color-mode');
        container.classList.remove('full-color-active');
        toggleBtn.style.background = "rgba(20, 20, 20, 0.8)";
        toggleBtn.style.color = "white";
        revealPath.setAttribute('d', 'M 0 0 Z');
        hoverPath.setAttribute('d', 'M 0 0 Z');
    }
});