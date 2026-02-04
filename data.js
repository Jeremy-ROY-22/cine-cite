const categoryData = {
    "western": { 
        title: "Western", 
        history: [
            { date: "1894 — 1930", title: "L'Aube de la Frontière", text: "Le Western naît avec le cinéma. Dès 1903, 'The Great Train Robbery' pose les jalons du genre." },
            { date: "1939 — 1960", title: "L'Âge d'Or Classique", text: "Avec John Ford, le Western devient une tragédie grecque dans les décors de Monument Valley." },
            { date: "1964 — Aujourd'hui", title: "Le Crépuscule et le Néo-Western", text: "Sergio Leone casse les codes avec le Western Spaghetti et la déconstruction du mythe." }
        ],
        anecdotes: [
            "Henry Fonda a dû porter des lentilles marron pour masquer ses yeux bleus trop 'gentils' dans 'Il était une fois dans l'Ouest'.",
            "John Wayne a joué dans plus de 140 Westerns au cours de sa carrière monumentale."
        ],
        movies: [
            { title: "Stagecoach", date: "1939", poster: "assets/affiches/stagecoach.jpg" }, 
            { title: "The Searchers", date: "1956", poster: "assets/affiches/searchers.jpg" },
            { title: "Once Upon a Time in the West", date: "1968", poster: "assets/affiches/once_upon_time.jpg" }, 
            { title: "Unforgiven", date: "1992", poster: "assets/affiches/unforgiven.jpg" },
            { title: "True Grit", date: "2010", poster: "assets/affiches/true_grit.jpg" }, 
            { title: "Django Unchained", date: "2012", poster: "assets/affiches/django.jpg" }
        ]
    },
    "fantaisie": { 
        title: "Fantaisie", 
        history: [
            { date: "1900 — 1950", title: "Magie Silencieuse", text: "Le genre puise ses racines dans les trucages de Georges Méliès et les contes folkloriques." },
            { date: "1980 — 1990", title: "L'Ère des Marionnettes", text: "Des génies comme Jim Henson créent des mondes tangibles avec des prothèses et des animatroniques." },
            { date: "2001 — Aujourd'hui", title: "Le Gigantisme Numérique", text: "Peter Jackson prouve que la Fantaisie peut être un succès mondial massif." }
        ],
        anecdotes: [
            "Pour 'Le Seigneur des Anneaux', plus de 10 000 prothèses de pieds de Hobbits ont été fabriquées.",
            "Le film 'Legend' de Ridley Scott a utilisé de la vraie nourriture pour éviter l'aspect artificiel."
        ],
        movies: [
            { title: "The Wizard of Oz", date: "1939", poster: "assets/affiches/magicien_oz.jpg" }, 
            { title: "Willow", date: "1988", poster: "assets/affiches/willow.jpg" },
            { title: "The Fellowship of the Ring", date: "2001", poster: "assets/affiches/seigneur_anneaux.jpg" }, 
            { title: "Harry Potter", date: "2001", poster: "assets/affiches/harry_potter.jpg" },
            { title: "Pan's Labyrinth", date: "2006", poster: "assets/affiches/lab_pan.jpg" }, 
            { title: "The Chronicles of Narnia", date: "2005", poster: "assets/affiches/narnia.jpg" }
        ]
    },
    "aventure": { 
        title: "Aventure", 
        history: [
            { date: "1920 — 1950", title: "Grands Récits d'Évasion", text: "L'aventure classique naît avec les films de cape et d'épée." },
            { date: "1981 — 2000", title: "L'Action Moderne", text: "Indiana Jones redéfinit l'aventure en y mêlant archéologie et humour." },
            { date: "2003 — Aujourd'hui", title: "Spectacle et Survie", text: "Avec 'Pirates des Caraïbes', l'aventure devient fantastique et grandiose." }
        ],
        anecdotes: [
            "Le chapeau d'Indiana Jones a été vieilli par Harrison Ford lui-même en s'asseyant dessus.",
            "L'attraction Disney a inspiré le film Pirates des Caraïbes, et non l'inverse."
        ],
        movies: [
            { title: "Robin Hood", date: "1938", poster: "assets/affiches/robin_hood.jpg" }, 
            { title: "Raiders of the Lost Ark", date: "1981", poster: "assets/affiches/indiana_jones.jpg" },
            { title: "Jurassic Park", date: "1993", poster: "assets/affiches/jurassic_park.jpg" }, 
            { title: "Pirates of the Caribbean", date: "2003", poster: "assets/affiches/pirates_caribbean.jpg" },
            { title: "The Mummy", date: "1999", poster: "assets/affiches/mummy.jpg" }, 
            { title: "Uncharted", date: "2022", poster: "assets/affiches/uncharted.jpg" }
        ]
    },
    "animation": { 
        title: "Animation", 
        history: [
            { date: "1937 — 1980", title: "Le Dessin à la Main", text: "Walt Disney révolutionne le cinéma avec 'Blanche-Neige'." },
            { date: "1995 — 2010", title: "La Révolution 3D", text: "Pixar change la donne avec 'Toy Story', le premier long-métrage entièrement numérique." },
            { date: "2010 — Aujourd'hui", title: "Hybridation et Style", text: "L'animation moderne mélange 2D, 3D et styles picturaux." }
        ],
        anecdotes: [
            "Walt Disney a reçu sept mini-Oscars pour 'Blanche-Neige'.",
            "Pour 'Le Roi Lion', des animateurs ont étudié de vrais lions en studio."
        ],
        movies: [
            { title: "Snow White", date: "1937", poster: "assets/affiches/snow_white.jpg" }, 
            { title: "Spirited Away", date: "2001", poster: "assets/affiches/spirited_away.jpg" },
            { title: "Toy Story", date: "1995", poster: "assets/affiches/toy_story.jpg" }, 
            { title: "The Lion King", date: "1994", poster: "assets/affiches/lion_king.jpg" },
            { title: "Spider-Man: Spider-Verse", date: "2018", poster: "assets/affiches/spider_vers.jpg" }, 
            { title: "Soul", date: "2020", poster: "assets/affiches/soul.jpg" }
        ]
    },
    "horreur": { 
        title: "Horreur", 
        history: [
            { date: "1920 — 1950", title: "Monstres Classiques", text: "L'expressionnisme allemand pose les bases de la peur visuelle." },
            { date: "1970 — 1990", title: "Slasher et Paranormal", text: "L'horreur devient sanglante avec le Slasher ou psychologique avec l'Exorciste." },
            { date: "2010 — Aujourd'hui", title: "L'Horreur Sociale", text: "Le genre utilise la peur pour traiter de sujets de société réels." }
        ],
        anecdotes: [
            "Le sang dans 'Psychose' était en fait du sirop de chocolat.",
            "Le film 'L'Exorciste' a été entouré de rumeurs de malédiction."
        ],
        movies: [
            { title: "Nosferatu", date: "1922", poster: "assets/affiches/nosferatu.jpg" }, 
            { title: "Psycho", date: "1960", poster: "assets/affiches/psycho.jpg" },
            { title: "The Exorcist", date: "1973", poster: "assets/affiches/exorcist.jpg" }, 
            { title: "Halloween", date: "1978", poster: "assets/affiches/halloween.jpg" },
            { title: "Get Out", date: "2017", poster: "assets/affiches/get_out.jpg" }, 
            { title: "Hereditary", date: "2018", poster: "assets/affiches/hereditary.jpg" }
        ]
    },
    "superhero": { 
        title: "Super-Héros", 
        history: [
            { date: "1940 — 1978", title: "Premiers Pas", text: "Les super-héros gagnent leur crédibilité avec le 'Superman' de Richard Donner." },
            { date: "2000 — 2008", title: "Ascension", text: "X-Men et Spider-Man lancent la vague moderne et sombre." },
            { date: "2008 — Aujourd'hui", title: "L'Univers Connecté", text: "Le MCU change l'industrie en créant une saga de films liés." }
        ],
        anecdotes: [
            "Stan Lee a fait un caméo dans presque tous les films Marvel.",
            "Le costume de Batman en 1989 empêchait Michael Keaton de tourner la tête."
        ],
        movies: [
            { title: "Superman", date: "1978", poster: "assets/affiches/superman.jpg" }, 
            { title: "Batman", date: "1989", poster: "assets/affiches/batman.jpg" },
            { title: "X-Men", date: "2000", poster: "assets/affiches/x-men.jpg" }, 
            { title: "Spider-Man", date: "2002", poster: "assets/affiches/spiderman.jpg" },
            { title: "The Avengers", date: "2012", poster: "assets/affiches/avengers.jpg" }, 
            { title: "The Dark Knight", date: "2008", poster: "assets/affiches/dark_knight.jpg" }
        ]
    },
    "scifi": { 
        title: "Science-Fiction", 
        history: [
            { date: "1902 — 1960", title: "L'Espace et la Peur", text: "Le genre commence par l'émerveillement lunaire avant la paranoïa extraterrestre." },
            { date: "1968 — 1982", title: "Réflexion et Cyberpunk", text: "La SF devient philosophique avec '2001' puis dystopique avec 'Blade Runner'." },
            { date: "1990 — Aujourd'hui", title: "IA et Blockbusters", text: "Le numérique permet des mondes totaux comme Matrix ou Avatar." }
        ],
        anecdotes: [
            "Les sons des sabres laser ont été créés avec un vieux projecteur de cinéma.",
            "Le code vert dans Matrix est une compilation de recettes de sushis."
        ],
        movies: [
            { title: "Metropolis", date: "1927", poster: "assets/affiches/metropolis.jpg" }, 
            { title: "2001: A Space Odyssey", date: "1968", poster: "assets/affiches/2001.jpg" },
            { title: "Star Wars", date: "1977", poster: "assets/affiches/star_wars.jpg" }, 
            { title: "Blade Runner", date: "1982", poster: "assets/affiches/blade_runner.jpg" },
            { title: "Matrix", date: "1999", poster: "assets/affiches/matrix.jpg" }, 
            { title: "Interstellar", date: "2014", poster: "assets/affiches/interstellar.jpg" }
        ]
    },
    "peplm": { 
        title: "Péplum", 
        history: [
            { date: "1910 — 1950", title: "Splendeur Silencieuse", text: "L'Antiquité fascine dès les débuts avec des fresques bibliques." },
            { date: "1950 — 1965", title: "Le Gigantisme", text: "C'est l'ère des blockbusters absolus : 'Ben-Hur' et 'Cléopâtre'." },
            { date: "2000 — Aujourd'hui", title: "Le Renouveau Digital", text: "Gladiator ressuscite le genre grâce aux décors numériques." }
        ],
        anecdotes: [
            "La course de chars de Ben-Hur a nécessité 5 semaines de tournage.",
            "Les acteurs de 300 ont suivi un entraînement militaire intensif."
        ],
        movies: [
            { title: "Ben-Hur", date: "1959", poster: "assets/affiches/ben-hur.jpg" }, 
            { title: "Cleopatra", date: "1963", poster: "assets/affiches/cleopatre.jpg" },
            { title: "Spartacus", date: "1960", poster: "assets/affiches/spartacus.jpg" }, 
            { title: "Gladiator", date: "2000", poster: "assets/affiches/gladiator.jpg" },
            { title: "Troy", date: "2004", poster: "assets/affiches/troy.jpg" }, 
            { title: "300", date: "2006", poster: "assets/affiches/300.jpg" }
        ]
    },
    "espionnage": { 
        title: "Espionnage", 
        history: [
            { date: "1950 — 1980", title: "La Guerre Froide", text: "Le genre est indissociable du contexte politique. James Bond naît en 1962." },
            { date: "1990 — 2000", title: "Gadgets et Spectacle", text: "L'espionnage devient spectaculaire avec Mission Impossible." },
            { date: "2002 — Aujourd'hui", title: "Réalisme et Tension", text: "Jason Bourne change les codes avec un espionnage brutal." }
        ],
        anecdotes: [
            "Ian Fleming était un véritable agent de renseignement britannique.",
            "Tom Cruise réalise lui-même la quasi-totalité de ses cascades."
        ],
        movies: [
            { title: "North by Northwest", date: "1959", poster: "assets/affiches/north_northwest.jpg" }, 
            { title: "Dr. No", date: "1962", poster: "assets/affiches/dr_no.jpg" },
            { title: "Mission: Impossible", date: "1996", poster: "assets/affiches/mission_impossible.jpg" }, 
            { title: "The Bourne Identity", date: "2002", poster: "assets/affiches/jason_bourne.jpg" },
            { title: "Kingsman", date: "2014", poster: "assets/affiches/kingsman.jpg" }, 
            { title: "Skyfall", date: "2012", poster: "assets/affiches/skyfall.jpg" }
        ]
    },
    "centre": { 
        title: "Ciné Cité", 
        history: [
            { 
                date: "MMI 3 — 2026", 
                title: "Réenchanter le monde", 
                text: "Dans le cadre de mon projet de 3ème année de BUT MMI, j'ai choisi d'explorer l'univers du cinéma sous un angle ludique et immersif. À travers cette carte interactive, Ciné Cité vous invite à redécouvrir les genres qui ont façonné l'imaginaire collectif, mêlant exploration visuelle et rigueur historique." 
            }
        ]
    }
};