const mapContainer = document.getElementById('map-container');
const grayLayer = document.getElementById('gray-layer');
const detailsPanel = document.getElementById('details-panel');

// 1. GESTION DE LA RÉVÉLATION (Hover)
mapContainer.addEventListener('mousemove', (e) => {
    const rect = mapContainer.getBoundingClientRect();
    
    // Calcul de la position de la souris en pourcentage
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // On révèle le calque GRIS sous la souris (Effet lampe torche)
    // Note : On inverse le principe pour que le gris disparaisse là où on passe
    grayLayer.style.clipPath = `circle(150px at ${x}% ${y}%)`;
});

// 2. GESTION DU ZOOM ET PAN (Déplacement)
const panzoom = Panzoom(mapContainer, {
    maxScale: 5,
    minScale: 1,
    contain: 'outside'
});

mapContainer.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// 3. GESTION DU CLIC SUR LES ZONES
document.querySelectorAll('.map-zone').forEach(zone => {
    zone.addEventListener('click', (e) => {
        const title = e.target.getAttribute('data-title');
        const desc = e.target.getAttribute('data-desc');
        
        document.getElementById('cat-title').innerText = title;
        document.getElementById('cat-desc').innerText = desc;
        
        detailsPanel.classList.add('active');
        detailsPanel.classList.remove('hidden');
    });
});

// Fermer le panneau
document.getElementById('close-btn').addEventListener('click', () => {
    detailsPanel.classList.remove('active');
});