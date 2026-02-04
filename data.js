const categoryData = {
    "western": { 
        title: "Western", 
        history: [
            { date: "1894 — 1930", 
                title: "L'Aube de la Frontière", 
                text: "Le Western ne naît pas au cinéma, mais il s'y accomplit. Dès 1903, 'Le Grand Vol du Rapide' pose les jalons d'un genre qui deviendra le ciment du mythe américain. Dans cette ère primitive, le cinéma capture une Frontière qui existe encore physiquement, mêlant réalité et fiction." },
            { date: "1939 — 1960", 
                title: "L'Âge d'Or Classique", 
                text: "C'est l'époque de la splendeur. Avec John Ford et les horizons de Monument Valley, le Western devient une tragédie grecque moderne. John Wayne incarne le héros sans faille, défenseur d'une civilisation en marche. Les thèmes sont nobles, les duels sont clairs, et l'esthétique est majestueuse." },
            { date: "1964 — Aujourd'hui", 
                title: "Le Crépuscule et le Néo-Western", 
                text: "Sous l'influence de Sergio Leone, le genre s'assombrit brutalement. Les héros deviennent cyniques, la poussière remplace le panache. On déconstruit le mythe pour montrer la violence réelle de l'Ouest. Le Western devient alors un miroir critique et politique de la société moderne." }
        ],
        anecdotes: [
            "Henry Fonda a dû porter des lentilles marron pour la première fois pour masquer ses yeux bleus trop 'gentils' dans 'Il était une fois dans l'Ouest'.",
            "Le réalisateur John Ford a découvert Monument Valley grâce à un couple de gérants de poste de traite qui cherchait à sauver la région de la famine."
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
            { date: "1900 — 1950", 
                title: "Magie Silencieuse et Contes", 
                text: "Le genre puise ses racines dans les trucages de Georges Méliès et les contes folkloriques. 'Le Magicien d'Oz' (1939) définit l'esthétique du genre pour des décennies, apportant de la couleur et du rêve dans une époque marquée par les conflits mondiaux." },
            { date: "1980 — 1990", 
                title: "L'Ère des Marionnettes", 
                text: "Avant l'invasion du numérique, des génies comme Jim Henson et George Lucas créent des mondes tangibles. Les créatures sont faites de latex et de câbles, donnant à des films comme 'Dark Crystal' ou 'Willow' une texture et une présence physique inimitable." },
            { date: "2001 — Aujourd'hui", 
                title: "Le Gigantisme Numérique", 
                text: "L'adaptation du 'Seigneur des Anneaux' par Peter Jackson prouve que la Fantaisie peut être un succès mondial massif. Le genre entre dans l'ère de la démesure visuelle, où des armées entières sont générées par ordinateur pour recréer des épopées mythologiques totales." }
        ],
        anecdotes: [
            "Pour 'Le Seigneur des Anneaux', plus de 10 000 prothèses de pieds de Hobbits ont été fabriquées à la main pour les besoins du tournage.",
            "Le film 'Legend' de Ridley Scott a utilisé de la vraie nourriture et des décors naturels monumentaux pour éviter l'aspect artificiel des studios de l'époque."
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
            { date: "1920 — 1950", 
                title: "Les Grands Récits d'Évasion", 
                text: "L'aventure classique naît avec les films de cape et d'épée. Le héros est un bretteur intrépide, souvent incarné par Errol Flynn, évoluant dans des décors exotiques ou historiques. C'est l'époque du panache et du sens du sacrifice." },
            { date: "1981 — 2000", 
                title: "L'Action Moderne", 
                text: "Indiana Jones redéfinit le genre en y mêlant archéologie, humour et cascades réelles. Le héros n'est plus invincible, il saigne et il doute, rendant l'aventure plus humaine et haletante pour une nouvelle génération de spectateurs." },
            { date: "2003 — Aujourd'hui", 
                title: "Spectacle et Survie", 
                text: "Avec le succès de 'Pirates des Caraïbes', l'aventure devient fantastique et démesurée. Aujourd'hui, elle explore autant les confins de la Terre que les limites de la survie humaine dans des environnements hostiles filmés avec une précision chirurgicale." }
        ],
        anecdotes: [
            "Le chapeau emblématique d'Indiana Jones a été vieilli artificiellement par l'acteur Harrison Ford lui-même, qui s'est assis dessus à plusieurs reprises.",
            "L'attraction 'Pirates des Caraïbes' des parcs Disney a inspiré le premier film, un pari risqué pour le studio qui est devenu un phénomène mondial."
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
            { date: "1937 — 1980", 
                title: "Le Dessin à la Main", 
                text: "Walt Disney révolutionne le cinéma avec 'Blanche-Neige'. Pendant des décennies, l'animation celluloïd règne en maître, demandant un travail titanesque où chaque image est peinte à la main, créant une fluidité organique inégalée." },
            { date: "1995 — 2010", 
                title: "La Révolution 3D", 
                text: "Pixar change définitivement la donne avec 'Toy Story', le premier long-métrage entièrement numérique. Le genre gagne en profondeur visuelle, en réalisme des matières, mais aussi en maturité narrative, touchant désormais tous les âges." },
            { date: "2010 — Aujourd'hui", 
                title: "Hybridation et Style", 
                text: "L'animation contemporaine refuse de choisir entre 2D et 3D. Des films comme 'Spider-Verse' créent des styles graphiques uniques qui ressemblent à des bandes dessinées vivantes, poussant l'innovation technique au service de l'émotion pure." }
        ],
        anecdotes: [
            "Walt Disney a reçu un Oscar d'honneur accompagné de sept petites statuettes pour 'Blanche-Neige et les Sept Nains', soulignant le caractère unique du film.",
            "Pour 'Le Roi Lion', des animateurs ont passé des mois à étudier de vrais lions en studio pour capturer fidèlement leurs mouvements et leur musculature."
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
            { date: "1920 — 1950", 
                title: "Monstres Classiques", 
                text: "L'expressionnisme allemand pose les bases de la peur visuelle avec des ombres portées et des décors torturés. Universal crée ensuite ses monstres cultes comme Dracula ou Frankenstein, qui hantent encore l'imaginaire collectif." },
            { date: "1970 — 1990", 
                title: "Slasher et Paranormal", 
                text: "L'horreur quitte les châteaux gothiques pour s'installer dans la banlieue américaine. Elle devient sanglante avec les slashers ('Halloween') ou plus psychologique et viscérale avec des récits de possession comme 'L'Exorciste'." },
            { date: "2010 — Aujourd'hui", 
                title: "L'Horreur Sociale", 
                text: "Le genre connaît un renouveau intellectuel brillant. Des cinéastes comme Jordan Peele utilisent la peur pour traiter de sujets de société réels, prouvant que l'horreur est un outil puissant pour explorer les failles de l'humanité." }
        ],
        anecdotes: [
            "Le sang utilisé dans la célèbre scène de la douche de 'Psychose' était en réalité du sirop de chocolat, dont la viscosité ressortait mieux sur une pellicule noir et blanc.",
            "Le tournage de 'L'Exorciste' a été marqué par de nombreux accidents mystérieux, au point que certains membres de l'équipe pensaient le plateau réellement maudit."
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
            { date: "1940 — 1978", 
                title: "Les Premiers Pas", 
                text: "Après des débuts modestes dans les serials à petit budget, les super-héros gagnent leurs lettres de noblesse avec 'Superman' (1978). Le film prouve qu'un homme peut voler au cinéma grâce à des effets spéciaux révolutionnaires." },
            { date: "2000 — 2008", 
                title: "L'Ascension du Genre", 
                text: "X-Men et Spider-Man lancent la vague moderne, mais c'est la trilogie 'The Dark Knight' de Christopher Nolan qui apporte un réalisme inédit, transformant le super-héros en une figure de tragédie urbaine complexe." },
            { date: "2008 — Aujourd'hui", 
                title: "L'Univers Connecté", 
                text: "Le Marvel Cinematic Universe change l'industrie en créant une immense saga de plus de vingt films liés. Le super-héros devient le genre dominant du box-office mondial, redéfinissant la manière de consommer le cinéma." }
        ],
        anecdotes: [
            "Le créateur Stan Lee a fait une apparition courte (caméo) dans presque tous les films Marvel jusqu'à son décès en 2018, pour le plus grand plaisir des fans.",
            "Le costume de Batman dans le film de 1989 était si rigide que Michael Keaton ne pouvait pas bouger le cou et devait tourner tout son buste pour regarder sur le côté."
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
            { date: "1902 — 1960", 
                title: "L'Espace et la Peur", 
                text: "Le genre commence par l'émerveillement de Méliès avant de plonger dans la paranoïa extraterrestre de la Guerre Froide. Les soucoupes volantes deviennent le miroir des craintes liées à l'atome et à l'invasion." },
            { date: "1968 — 1982", 
                title: "Réflexion et Cyberpunk", 
                text: "La SF devient philosophique avec '2001, l'Odyssée de l'espace' puis dystopique avec 'Blade Runner'. On commence à questionner sérieusement notre rapport à la technologie et à notre propre humanité." },
            { date: "1990 — Aujourd'hui", 
                title: "Intelligence Artificielle et Mondes Totaux", 
                text: "Le passage au numérique permet de créer des univers d'une densité folle comme 'Matrix' ou 'Avatar'. La SF explore désormais des thèmes d'actualité comme l'effondrement climatique et la conscience des machines." }
        ],
        anecdotes: [
            "Le son caractéristique des sabres laser dans 'Star Wars' a été créé en mélangeant le ronronnement d'un vieux projecteur de cinéma et les interférences d'un câble micro avec une télévision.",
            "Le fameux code vert qui défile dans 'Matrix' est en fait une compilation de recettes de sushis numérisées et stylisées par le designer du film."
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
            { date: "1910 — 1950", 
                title: "Splendeur Silencieuse", 
                text: "L'Antiquité fascine le cinéma italien dès ses débuts. Le genre explose avec des fresques historiques bibliques ou mythologiques utilisant des décors réels colossaux et des milliers de figurants." },
            { date: "1950 — 1965", 
                title: "L'Âge du Gigantisme", 
                text: "C'est l'ère des blockbusters absolus comme 'Ben-Hur' ou 'Cléopâtre'. Ces productions titanesques visent à concurrencer l'arrivée de la télévision par un spectacle visuel que seul le grand écran peut offrir." },
            { date: "2000 — Aujourd'hui", 
                title: "Le Renouveau Digital", 
                text: "Après des décennies d'absence, 'Gladiator' ressuscite le genre. Le Péplum moderne utilise la puissance du numérique pour recréer des cités antiques disparues et des batailles d'une envergure impossible auparavant." }
        ],
        anecdotes: [
            "La légendaire course de chars de 'Ben-Hur' (1959) a nécessité cinq semaines entières de tournage pour une séquence finale de seulement neuf minutes à l'écran.",
            "Les acteurs principaux du film '300' ont dû suivre un entraînement militaire et physique intensif pendant huit semaines avant le tournage pour obtenir leur carrure de guerriers spartiate."
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
            { date: "1950 — 1980", 
                title: "L'Ombre de la Guerre Froide", 
                text: "Le genre est indissociable du contexte politique mondial. James Bond naît en 1962, définissant les codes de l'espion moderne : élégance, gadgets technologiques et tensions géopolitique mondiales." },
            { date: "1990 — 2000", 
                title: "Gadgets et Spectacle", 
                text: "L'espionnage devient une machine de divertissement spectaculaire avec 'Mission Impossible'. L'action physique et les cascades impossibles prennent le pas sur l'infiltration pure et le secret de salon." },
            { date: "2002 — Aujourd'hui", 
                title: "Réalisme et Tension Moderne", 
                text: "Jason Bourne change les règles avec un espionnage brutal et réaliste. Le genre s'adapte désormais aux nouvelles menaces : surveillance numérique, cyber-attaques et zones grises morales de la politique moderne." }
        ],
        anecdotes: [
            "L'auteur de James Bond, Ian Fleming, était lui-même un véritable agent de renseignement britannique durant la Seconde Guerre mondiale, puisant ses récits dans son expérience réelle.",
            "Tom Cruise réalise lui-même la quasi-totalité de ses cascades impressionnantes dans la saga 'Mission Impossible', refusant souvent d'être doublé par souci de réalisme."
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
                text: "Dans le cadre de mon projet de 3ème année de BUT MMI, j'ai choisi d'explorer l'univers du cinéma sous un angle ludique et immersif. À travers cette carte 5K interactive, Ciné Cité vous invite à redécouvrir les genres qui ont façonné l'imaginaire collectif, mêlant exploration visuelle et rigueur historique." 
            }
        ]
    }
};