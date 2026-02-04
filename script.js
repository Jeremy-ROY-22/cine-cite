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

/* --- 1. SÉLECTION DES ÉLÉMENTS --- */
const container = document.getElementById('map-container');
const colorLayer = document.getElementById('color-layer');
const revealPath = document.getElementById('reveal-path');
const hoverPath = document.getElementById('hover-path');
const zones = document.querySelectorAll('.map-zone');
const panel = document.getElementById('details-panel');
const panelContent = document.querySelector('.panel-content');

let fadeTimeout; 
let currentOpenId = null;

/* --- 2. INITIALISATION DU ZOOM (PANZOOM) --- */
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

/* --- 3. LOGIQUE INTERACTIVE DES ZONES --- */
zones.forEach(zone => {
    const id = zone.parentElement.id;

    zone.addEventListener('mouseenter', () => {
        clearTimeout(fadeTimeout); 
        hoverPath.setAttribute('d', zone.getAttribute('d'));
        colorLayer.classList.add('active');
    });

    zone.addEventListener('mouseleave', () => {
        hoverPath.setAttribute('d', 'M 0 0 Z');
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

        if (panel.classList.contains('active') && currentOpenId === id) {
            closePanel();
            return;
        }

        const data = categoryData[id]; 
        if (data) {
            if (e.clientX > window.innerWidth / 2) {
                panel.classList.add('left-side');
            } else {
                panel.classList.remove('left-side');
            }

            // --- CONSTRUCTION DYNAMIQUE SÉCURISÉE ---
            
            // 1. Histoire (Toujours présente)
            const historyHtml = data.history.map(h => `
                <div class="history-section">
                    <span class="date-range">${h.date}</span>
                    <h3>${h.title}</h3>
                    <p>${h.text}</p>
                </div>
            `).join('');

            // 2. Anecdotes (Seulement si elles existent)
            const anecdotesHtml = (data.anecdotes && data.anecdotes.length > 0) ? `
                <div class="anecdote-box">
                    ${data.anecdotes.map(a => `<div class="anecdote-item">${a}</div>`).join('')}
                </div>
            ` : '';

            // 3. Films (Seulement s'ils existent)
            const moviesHtml = (data.movies && data.movies.length > 0) ? `
                <h2>Filmographie Majeure</h2>
                <div class="movie-carousel">
                    ${data.movies.map(m => `
                        <div class="movie-card">
                            <div class="poster-placeholder">
                                <img src="${m.poster}" class="movie-poster" alt="${m.title}">
                            </div>
                            <div class="movie-info">
                                <span class="m-title">${m.title}</span>
                                <span class="m-date">${m.date}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '';

            // Injection finale
            panelContent.innerHTML = `
                <h1 class="font-${id}">${data.title}</h1>
                <h2>${id === 'centre' ? 'Présentation du Projet' : 'Parcours Historique'}</h2>
                ${historyHtml}
                ${anecdotesHtml}
                ${moviesHtml}
                <div style="height: 60px;"></div>
            `;
            
            currentOpenId = id; 
            revealPath.setAttribute('d', zone.getAttribute('d'));
            
            panel.classList.remove('hidden');
            setTimeout(() => panel.classList.add('active'), 10);
        }
    });
});

/* --- 4. FERMETURE DU PANNEAU --- */
function closePanel() {
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
}
document.getElementById('close-btn').addEventListener('click', closePanel);

/* --- 5. TOGGLE MODE COULEUR --- */
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