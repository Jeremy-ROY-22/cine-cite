const categoryData = {
    "western": { 
        title: "Western", 
        font: "",
        history: [
            { date: "1894 — 1930", 
                title: "L'Aube de la Frontière", 
                text: "Le Western naît avec le cinéma. Dès 1903, 'The Great Train Robbery' pose les jalons du genre : le crime, la poursuite et la justice sauvage dans une Amérique en pleine mutation." },
            { date: "1939 — 1960", 
                title: "L'Âge d'Or Classique", 
                text: "Avec John Ford, le Western devient une tragédie grecque. John Wayne incarne le héros moralement pur, défenseur d'une civilisation en marche dans les décors de Monument Valley." },
            { date: "1964 — Aujourd'hui", 
                title: "Le Crépuscule et le Néo-Western", 
                text: "Sergio Leone casse les codes avec le Western Spaghetti. Plus sombre et cynique, le genre évolue vers la déconstruction du mythe, explorant la violence réelle de l'Ouest." }
        ],
        anecdotes: [
            "Henry Fonda a dû porter des lentilles marron pour masquer ses yeux bleus trop 'gentils' dans 'Il était une fois dans l'Ouest'.",
            "John Wayne a joué dans plus de 140 Westerns au cours de sa carrière monumentale."
        ],
        movies: [
            { title: "Stagecoach", date: "1939", poster: "assets/affiches/stagecoach.jpg" }, 
            { title: "The Searchers", date: "1956", poster: "assets/affiches/searchers.jpg" },
            { title: "Once Upon a Time in the West", date: "1968", poster: "assets/affiches/once_upon_e_time_j.jpg" }, 
            { title: "Unforgiven", date: "1992", poster: "assets/affiches/unforgiven.jpg" },
            { title: "True Grit", date: "2010", poster: "assets/affiches/true_grit.jpg" }, 
            { title: "Django Unchained", date: "2012", poster: "assets/affiches/django.jpg" }
        ]
    },

    "fantaisie": { 
        title: "Fantaisie", 
        font: "",
        history: [
            { date: "1900 — 1950", 
                title: "Magie Silencieuse et Contes", 
                text: "Le genre puise ses racines dans les trucages de Georges Méliès et les contes folkloriques. 'Le Magicien d'Oz' (1939) définit l'esthétique du genre pour des décennies." },
            { date: "1980 — 1990", 
                title: "L'Ère des Marionnettes", 
                text: "Avant le numérique, des génies comme Jim Henson et George Lucas créent des mondes tangibles avec des prothèses et des animatroniques ('Dark Crystal', 'Willow')." },
            { date: "2001 — Aujourd'hui", 
                title: "Le Gigantisme Numérique", 
                text: "L'adaptation du 'Seigneur des Anneaux' par Peter Jackson prouve que la Fantaisie peut être un succès mondial massif, lançant l'ère des sagas épiques visuellement totales." }
        ],
        anecdotes: [
            "Pour 'Le Seigneur des Anneaux', plus de 10 000 prothèses de pieds de Hobbits ont été fabriquées à la main.",
            "Le film 'Legend' de Ridley Scott a utilisé de la vraie nourriture et des décors naturels pour éviter l'aspect artificiel."
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
        font: "",
        history: [
            { date: "1920 — 1950", 
                title: "Les Grands Récits d'Évasion", 
                text: "L'aventure classique naît avec les films de cape et d'épée et les explorations coloniales. Le héros est un bretteur intrépide comme Errol Flynn dans 'Robin des Bois'." },
            { date: "1981 — 2000", 
                title: "L'Action Moderne", 
                text: "Indiana Jones redéfinit l'aventure en y mêlant archéologie, humour et cascades réelles. Le genre devient synonyme de quête d'artefacts et de mystères anciens." },
            { date: "2003 — Aujourd'hui", 
                title: "Spectacle et Survie", 
                text: "Avec 'Pirates des Caraïbes', l'aventure devient fantastique. Aujourd'hui, elle explore des milieux hostiles et des technologies de pointe, de la jungle au grand large." }
        ],
        anecdotes: [
            "Le chapeau emblématique d'Indiana Jones a été vieilli artificiellement par l'acteur Harrison Ford lui-même en s'asseyant dessus.",
            "L'attraction 'Pirates des Caraïbes' de Disney a inspiré le film, et non l'inverse, ce qui était une première à l'époque."
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
        font: "",
        history: [
            { date: "1937 — 1980", 
                title: "Le Dessin à la Main", 
                text: "Walt Disney révolutionne le cinéma avec 'Blanche-Neige'. Pendant 50 ans, l'animation celluloïd règne, demandant des milliers de dessins faits main par image." },
            { date: "1995 — 2010", 
                title: "La Révolution 3D", 
                text: "Pixar change la donne avec 'Toy Story', le premier long-métrage entièrement numérique. Le genre gagne en profondeur visuelle et en maturité narrative, accompagné de nombreuses évolutions technologiques majeures." },
            { date: "2010 — Aujourd'hui", 
                title: "Hybridation et Style", 
                text: "L'animation moderne mélange 2D, 3D et styles picturaux ('Spider-Verse'). Elle s'adresse désormais autant aux adultes qu'aux enfants avec des thèmes philosophiques." }
        ],
        anecdotes: [
            "Walt Disney a reçu un Oscar d'honneur accompagné de sept mini-Oscars pour 'Blanche-Neige et les Sept Nains'.",
            "Pour 'Le Roi Lion', des animateurs ont étudié de vrais lions en studio pour capturer leurs mouvements."
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
        font: "",
        history: [
            { date: "1920 — 1950", 
                title: "Monstres Classiques", 
                text: "L'expressionnisme allemand ('Nosferatu') pose les bases de la peur visuelle. Universal crée ensuite ses monstres cultes : Dracula, Frankenstein et le Loup-Garou." },
            { date: "1970 — 1990", 
                title: "Slasher et Paranormal", 
                text: "L'horreur devient sanglante avec le Slasher ('Halloween') ou psychologique avec l'Exorciste. On quitte les châteaux pour la banlieue américaine." },
            { date: "2010 — Aujourd'hui", 
                title: "L'Horreur Sociale", 
                text: "Le genre connaît un renouveau intellectuel avec des films comme 'Get Out', utilisant la peur pour traiter de sujets de société réels et profonds." }
        ],
        anecdotes: [
            "Le sang utilisé dans la scène de la douche de 'Psychose' était en fait du sirop de chocolat, qui rendait mieux en noir et blanc.",
            "Le film 'L'Exorciste' a été entouré de rumeurs de malédiction suite à de nombreux accidents sur le plateau."
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
        font: "",
        history: [
            { date: "1940 — 1978", 
                title: "Les Premiers Pas", 
                text: "D'abord des Serials à petit budget, les super-héros gagnent leur crédibilité avec le 'Superman' de Richard Donner, prouvant qu'un homme peut voler au cinéma." },
            { date: "2000 — 2008", 
                title: "L'Ascension du Genre", 
                text: "X-Men et Spider-Man lancent la vague moderne. Le genre s'assombrit avec la trilogie 'The Dark Knight' qui apporte un réalisme inédit." },
            { date: "2008 — Aujourd'hui", 
                title: "L'Univers Connecté", 
                text: "Le MCU (Marvel) change l'industrie en créant une saga de 23 films liés. Le super-héros est devenu le genre dominant du box-office mondial." }
        ],
        anecdotes: [
            "Stan Lee a fait un caméo dans presque tous les films Marvel jusqu'à son décès en 2018.",
            "Le costume de Batman dans le film de 1989 était si rigide que Michael Keaton ne pouvait pas tourner la tête."
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
        font: "",
        history: [
            { date: "1902 — 1960", 
                title: "L'Espace et la Peur", 
                text: "Le genre commence par l'émerveillement lunaire avant de se tourner vers la paranoïa extraterrestre durant la Guerre Froide et les invasions d'ovnis." },
            { date: "1968 — 1982", 
                title: "Réflexion et Cyberpunk", 
                text: "La SF devient philosophique avec '2001' puis dystopique avec 'Blade Runner'. C'est l'époque où l'on questionne notre futur technologique." },
            { date: "1990 — Aujourd'hui", 
                title: "IA et Blockbusters", 
                text: "Le numérique permet des mondes totaux ('Matrix', 'Avatar'). La SF explore désormais l'intelligence artificielle et l'effondrement climatique." }
        ],
        anecdotes: [
            "Les sons des sabres laser dans 'Star Wars' ont été créés en mélangeant le bourdonnement d'un vieux projecteur de cinéma et des câbles haute tension.",
            "Le code vert qui défile dans 'Matrix' est en fait une compilation de recettes de sushis numérisées."
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
        font: "",
        history: [
            { date: "1910 — 1950", 
                title: "Splendeur Silencieuse", 
                text: "L'Antiquité fascine dès les débuts de l'Italie. Le genre explose avec des fresques historiques bibliques ou mythologiques à grand spectacle." },
            { date: "1950 — 1965", 
                title: "Le Gigantisme", 
                text: "C'est l'ère des blockbusters absolus : 'Ben-Hur' et 'Cléopâtre'. Des milliers de figurants et des décors réels colossaux marquent cette période." },
            { date: "2000 — Aujourd'hui", 
                title: "Le Renouveau Digital", 
                text: "Après une longue absence, 'Gladiator' ressuscite le genre. Le Péplum moderne utilise le numérique pour recréer Rome ou Sparte avec une précision inédite." }
        ],
        anecdotes: [
            "La course de chars de 'Ben-Hur' (1959) a nécessité 5 semaines de tournage pour seulement 9 minutes de film.",
            "Les acteurs du film '300' ont suivi un entraînement militaire intensif pendant 8 semaines pour obtenir leur physique de Spartiates."
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
        font: "",
        history: [
            { date: "1950 — 1980", 
                title: "La Guerre Froide", 
                text: "Le genre est indissociable du contexte politique mondial. James Bond naît en 1962, mêlant élégance, gadgets et tension géopolitique." },
            { date: "1990 — 2000", 
                title: "Gadgets et Spectacle", 
                text: "L'espionnage devient une machine de divertissement spectaculaire avec 'Mission Impossible'. L'action prend le pas sur l'infiltration pure." },
            { date: "2002 — Aujourd'hui", 
                title: "Réalisme et Tension", 
                text: "Jason Bourne change les codes avec un espionnage brutal et réaliste. Le genre s'adapte aux menaces numériques et cybernétiques modernes." }
        ],
        anecdotes: [
            "L'auteur de James Bond, Ian Fleming, était lui-même un véritable agent de renseignement britannique durant la Seconde Guerre mondiale.",
            "Tom Cruise réalise lui-même la quasi-totalité de ses cascades dans 'Mission Impossible', y compris les plus dangereuses."
        ],
        movies: [
            { title: "North by Northwest", date: "1959", poster: "assets/affiches/north_northwest.jpg" }, 
            { title: "Dr. No", date: "1962", poster: "assets/affiches/dr_no.jpg" },
            { title: "Mission: Impossible", date: "1996", poster: "assets/affiches/mission_impossible.jpg" }, 
            { title: "The Bourne Identity", date: "2002", poster: "assets/affiches/jason_bourne.jpg" },
            { title: "Kingsman", date: "2014", poster: "assets/affiches/kingsman.jpg" }, 
            { title: "Skyfall", date: "2012", poster: "assets/affiches/skyfall.jpg" }
        ]
    }
};