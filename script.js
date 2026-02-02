const container = document.getElementById('map-container');
const colorLayer = document.getElementById('color-layer');
const detailsPanel = document.getElementById('details-panel');

// 1. INITIALISATION DU ZOOM
const panzoom = Panzoom(container, {
    maxScale: 4,
    minScale: 1,
    contain: 'outside'
});

container.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// 2. EFFET DE RÉVÉLATION (Lampe torche)
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    
    // Calcul de la position relative en % (indispensable pour le responsive)
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // On déplace le cercle de l'image couleur
    colorLayer.style.clipPath = `circle(150px at ${x}% ${y}%)`;
});

// Cache la révélation quand on sort de la carte
container.addEventListener('mouseleave', () => {
    colorLayer.style.clipPath = `circle(0% at 50% 50%)`;
});

// 3. CLIC SUR LES ZONES
document.querySelectorAll('.map-zone').forEach(zone => {
    zone.addEventListener('click', (e) => {
        // Stop la propagation pour ne pas déclencher le drag du Panzoom
        e.stopPropagation(); 
        
        const title = zone.getAttribute('data-title');
        const desc = zone.getAttribute('data-desc');
        
        document.getElementById('cat-title').innerText = title;
        document.getElementById('cat-desc').innerText = desc;
        
        detailsPanel.classList.remove('hidden');
        setTimeout(() => detailsPanel.classList.add('active'), 10);
    });
});

document.getElementById('close-btn').addEventListener('click', () => {
    detailsPanel.classList.remove('active');
});