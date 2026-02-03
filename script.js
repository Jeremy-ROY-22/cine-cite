/* --- 1. CATALOGUE DES DONNÉES --- */
// Les IDs doivent correspondre exactement aux noms de tes calques Illustrator
const categoryData = {
    "western": { 
        title: "Western", 
        desc: "L'âge d'or des pionniers, des duels au soleil et des saloons poussiéreux." 
    },
    "fantaisie": { 
        title: "Fantaisie", 
        desc: "Un royaume où la magie est reine, entre châteaux forts et créatures mythiques." 
    },
    "aventure": { 
        title: "Aventure", 
        desc: "Des jungles de Jurassic Park aux ponts du Black Pearl, l'aventure vous attend." 
    },
    "animation": { 
        title: "Animation", 
        desc: "Le monde merveilleux du dessin animé, de la maison de 'Là-Haut' aux studios Pixar." 
    },
    "horreur": { 
        title: "Horreur", 
        desc: "Frissons garantis dans les manoirs hantés et les sous-bois brumeux." 
    },
    "superhero": { 
        title: "Super-Héros", 
        desc: "Le centre de commandement des Avengers et des défenseurs de la Terre." 
    },
    "scifi": { 
        title: "Science-Fiction", 
        desc: "Voyagez vers le futur, entre métropoles cyberpunk et vaisseaux spatiaux." 
    },
    "peplm": { 
        title: "Péplum", 
        desc: "La splendeur de l'Antiquité, des temples grecs au Colisée de Rome." 
    },
    "espionnage": { 
        title: "Espionnage", 
        desc: "Le monde du secret, des gadgets high-tech et des agents doubles." 
    },
    "centre": { 
        title: "Ciné Cité", 
        desc: "Le cœur névralgique de la cité, là où tous les genres se rencontrent." 
    }
};

/* --- 2. SÉLECTION DES ÉLÉMENTS --- */
const container = document.getElementById('map-container');
const colorLayer = document.getElementById('color-layer');
const revealPath = document.getElementById('reveal-path');
const zones = document.querySelectorAll('.map-zone');
const panel = document.getElementById('details-panel');

let fadeTimeout; // Variable pour gérer la persistance de la couleur

/* --- 3. INITIALISATION DU ZOOM (PANZOOM) --- */
const panzoom = Panzoom(container, {
    maxScale: 2.5,
    minScale: 0.1,
    contain: 'outside',
    canvas: true
});

// Auto-zoom au chargement pour adapter la carte 5K à l'écran
setTimeout(() => {
    const zoomLevel = window.innerWidth / 5761; 
    panzoom.zoom(zoomLevel, { animate: true });
    panzoom.pan(0, 0);
}, 200);

// Activation du zoom à la molette
container.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

/* --- 4. LOGIQUE INTERACTIVE DES ZONES --- */
zones.forEach(zone => {
    const id = zone.parentElement.id; // Récupère l'ID du groupe <g>

    // SURVOL (ENTRÉE)
    zone.addEventListener('mouseenter', () => {
        // On annule toute disparition en cours
        clearTimeout(fadeTimeout); 
        
        // On applique le nouveau tracé immédiatement
        const d = zone.getAttribute('d');
        revealPath.setAttribute('d', d);
        
        // On allume la couleur avec le fondu CSS
        colorLayer.classList.add('active');
    });

    // SURVOL (SORTIE)
    zone.addEventListener('mouseleave', () => {
        // On lance le fondu de sortie
        colorLayer.classList.remove('active');
        
        // On attend que la transition CSS (1.5s) soit presque finie avant de vider le masque
        // Cela évite que la zone ne disparaisse brutalement
        fadeTimeout = setTimeout(() => {
            if (!colorLayer.classList.contains('active')) {
                revealPath.setAttribute('d', 'M 0 0 Z');
            }
        }, 1500); 
    });

    // CLIC (INFOS)
    zone.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêche le Panzoom de bloquer le clic
        
        const data = categoryData[id];
        if (data) {
            document.getElementById('cat-title').innerText = data.title;
            document.getElementById('cat-desc').innerText = data.desc;
            
            panel.classList.remove('hidden');
            // Petit délai pour permettre à la transition CSS 'transform' de s'activer
            setTimeout(() => panel.classList.add('active'), 10);
        }
    });
});

/* --- 5. FERMETURE DU PANNEAU --- */
document.getElementById('close-btn').addEventListener('click', () => {
    panel.classList.remove('active');
    // On cache l'élément après l'animation de sortie
    setTimeout(() => {
        if (!panel.classList.contains('active')) {
            panel.classList.add('hidden');
        }
    }, 500);
});


const toggleBtn = document.getElementById('view-toggle');
let isFullColor = false;

toggleBtn.addEventListener('click', () => {
    isFullColor = !isFullColor;
    
    if (isFullColor) {
        // Mode Tout en Couleur
        colorLayer.classList.add('full-color-mode');
        container.classList.add('full-color-active');
        toggleBtn.style.background = "white";
        toggleBtn.style.color = "black";
    } else {
        // Retour au mode Interactif
        colorLayer.classList.remove('full-color-mode');
        container.classList.remove('full-color-active');
        toggleBtn.style.background = "rgba(20, 20, 20, 0.8)";
        toggleBtn.style.color = "white";
        
        // On s'assure que le masque est bien réinitialisé
        revealPath.setAttribute('d', 'M 0 0 Z');
    }
});