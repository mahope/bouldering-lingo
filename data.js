const flashcardsData = {
    categories: {
        "grip": "Greb",
        "move": "Bevægelser", 
        "grade": "Gradering",
        "body": "Kropsposition",
        "general": "Generelt"
    },
    
    cards: [
        // ===== GREB (16 kort) =====
        {
            term: "Crimp",
            definition: "Et greb hvor fingrene er bøjet i første led og tommelen ofte presser ned på pegefingeren. Meget kraftfuldt men hårdt for fingrene.",
            example: "\"Den rute kræver stærke crimps på de små lister\"",
            category: "grip"
        },
        {
            term: "Half Crimp",
            definition: "En mere sikker crimp-variation hvor fingrene er bøjet 90°, men tommelen ikke presser. Mindre belastende for led og sener.",
            example: "\"Prøv half crimp i stedet - det er bedre for dine fingre\"",
            category: "grip"
        },
        {
            term: "Open Hand",
            definition: "Et greb med næsten strakte fingre hvor kraften kommer fra fingerflexorerne. Mest skånsomt for fingrene.",
            example: "\"Open hand er bedst på slopere og store lister\"",
            category: "grip"
        },
        {
            term: "Sloper",
            definition: "Et afrundet greb uden kanter, hvor man bruger friktion fra hele håndfladen. Kræver god kropsposition.",
            example: "\"Hold kroppen tæt på væggen på sloperne\"",
            category: "grip"
        },
        {
            term: "Jug",
            definition: "Et stort, positivt greb der er nemt at holde. Perfekt til hvile. Også kaldet 'bucket'.",
            example: "\"Der er en fed jug halvvejs oppe hvor du kan hvile\"",
            category: "grip"
        },
        {
            term: "Pinch",
            definition: "Et greb hvor man klemmer med tommelen mod de andre fingre, som at holde om en bog.",
            example: "\"Volumen i midten er en fed pinch\"",
            category: "grip"
        },
        {
            term: "Pocket",
            definition: "Et hul i væggen til en, to eller tre fingre. Kan være hårdt for sener.",
            example: "\"Pas på dine fingre i de mono pockets\"",
            category: "grip"
        },
        {
            term: "Mono",
            definition: "En pocket til kun én finger. Ekstremt krævende og risikabelt for fingerskader.",
            example: "\"Der er en sketchy mono på cruxet - brug langfingeren\"",
            category: "grip"
        },
        {
            term: "Undercling",
            definition: "Et greb man holder nedefra med hånden vendt opad. Kræver ofte god fodarbejde.",
            example: "\"Brug underclingen og step højt op med foden\"",
            category: "grip"
        },
        {
            term: "Sidepull",
            definition: "Et greb man trækker i sidelæns. Kræver modpres fra kroppen.",
            example: "\"Læn væk fra sidepullen for at få mest ud af den\"",
            category: "grip"
        },
        {
            term: "Gaston",
            definition: "Et sidepull hvor man presser udad med albuen, som at åbne en elevator-dør.",
            example: "\"Den gaston kræver virkelig skulderstyrke\"",
            category: "grip"
        },
        {
            term: "Edge",
            definition: "En smal kant eller liste man kan stå eller holde på. Kan være 'positive' eller 'bad'.",
            example: "\"Der er kun en lille edge til højre fod\"",
            category: "grip"
        },
        {
            term: "Rail",
            definition: "En god, lang edge der er behagelig at holde. Ofte incut (vinklet indad).",
            example: "\"Hvil på railen inden du går for toppen\"",
            category: "grip"
        },
        {
            term: "Incut",
            definition: "Et greb der er vinklet indad, så fingrene kan hænge på det. Det modsatte af sloper.",
            example: "\"Den incut er faktisk ret god selvom den ser lille ud\"",
            category: "grip"
        },
        {
            term: "Wrap",
            definition: "At vikle fingrene helt rundt om et greb eller kantholder.",
            example: "\"Du kan wrappe hele hånden rundt om arêten\"",
            category: "grip"
        },
        {
            term: "Volume",
            definition: "Store, skruede former på væggen der bruges som greb eller fodtrin. Ofte brugt i moderne routesetting.",
            example: "\"Hele boulderen er sat på volumener\"",
            category: "grip"
        },
        
        // ===== BEVÆGELSER (20 kort) =====
        {
            term: "Dyno",
            definition: "Et dynamisk spring hvor begge hænder slipper væggen for at nå et greb længere væk.",
            example: "\"Toppen er en fed dyno til jugen\"",
            category: "move"
        },
        {
            term: "Double Dyno",
            definition: "En dyno hvor man hopper fra to greb til to andre greb samtidig.",
            example: "\"Finalen havde en vild double dyno mellem to volumener\"",
            category: "move"
        },
        {
            term: "Deadpoint",
            definition: "En kontrolleret dynamisk bevægelse hvor man griber i det øjeblik kroppen er vægtløs øverst i svinget.",
            example: "\"Time dit deadpoint til når du er lettest\"",
            category: "move"
        },
        {
            term: "Mantle",
            definition: "At presse sig op og over et niveau, ligesom at komme op af en swimmingpool.",
            example: "\"Top-out'en er en sketchy mantle\"",
            category: "move"
        },
        {
            term: "Heel hook",
            definition: "At bruge hælen på et greb og trække med baglåret. Meget kraftfuldt på overhæng.",
            example: "\"Sæt et heel hook på volumen og træk dig ind\"",
            category: "move"
        },
        {
            term: "Toe hook",
            definition: "At bruge oversiden af foden/tæerne til at hænge på et greb og skabe modpres.",
            example: "\"Der er et sneaky toe hook der gør cruxet meget lettere\"",
            category: "move"
        },
        {
            term: "Bicycle",
            definition: "At bruge heel hook og toe hook samtidig på modstående sider af et greb for at klemme sig fast.",
            example: "\"Bicycle ind på volumen, så er næste træk meget lettere\"",
            category: "move"
        },
        {
            term: "Drop knee",
            definition: "At dreje knæet indad og ned for at bringe hoften tættere på væggen. Sparer armstyrke.",
            example: "\"Et godt drop knee giver dig meget længere rækkevidde\"",
            category: "move"
        },
        {
            term: "Flag",
            definition: "At strække et ben ud til siden for balance, uden at bruge det til at stå på.",
            example: "\"Flag med venstre ben for at undgå at barn door'e\"",
            category: "move"
        },
        {
            term: "Backstep",
            definition: "At stå på ydersiden af foden med hoften drejet mod væggen. Giver længere rækkevidde.",
            example: "\"Backstep på det trin og du kan nå sloperen\"",
            category: "move"
        },
        {
            term: "Barn door",
            definition: "Når kroppen svinger ukontrolleret til siden som en ladeport, typisk pga. dårlig balance.",
            example: "\"Jeg barn door'ede af cruxet tre gange\"",
            category: "move"
        },
        {
            term: "Campus",
            definition: "At klatre kun med hænderne, uden at bruge fødderne.",
            example: "\"Han campus'ede hele boulderen for at vise sig\"",
            category: "move"
        },
        {
            term: "Smear",
            definition: "At bruge friktion fra skoen mod en flad overflade uden egentlige fodgreb.",
            example: "\"Der er ingen fodgreb, du skal bare smeare på væggen\"",
            category: "move"
        },
        {
            term: "Match",
            definition: "At sætte begge hænder på samme greb.",
            example: "\"Match på jugen og hvil inden cruxet\"",
            category: "move"
        },
        {
            term: "Cut loose",
            definition: "Når fødderne mister kontakt med væggen og man hænger frit i armene.",
            example: "\"Du må ikke cut loose på det move - hold spændingen!\"",
            category: "move"
        },
        {
            term: "Figure Four",
            definition: "En avanceret teknik hvor man hægter benet over den modsatte arm for ekstra rækkevidde.",
            example: "\"Han lavede en vild figure four på konkurrencen\"",
            category: "move"
        },
        {
            term: "Bat hang",
            definition: "At hænge på et heel hook med hovedet nedad, som en flagermus.",
            example: "\"Der er en bat hang rest halvvejs gennem taget\"",
            category: "move"
        },
        {
            term: "Rose move",
            definition: "At hoppe begge fødder til nye trin samtidig. Kræver god timing og balance.",
            example: "\"Rose move op til den høje fodtrin\"",
            category: "move"
        },
        {
            term: "Kneebar",
            definition: "At klemme knæet og foden mod væggen for at skabe en låst position. Fantastisk til hvile.",
            example: "\"Der er en no-hands kneebar rest lige før toppen\"",
            category: "move"
        },
        {
            term: "Rockover",
            definition: "At flytte vægten helt over på en fod ved at vippe hoften op og over.",
            example: "\"Rockover på højre fod og pres dig op på den næste liste\"",
            category: "move"
        },
        
        // ===== KROPSPOSITION (10 kort) =====
        {
            term: "Tension",
            definition: "Kroppens spænding fra fingre til tæer. Essentielt for overhæng og kraftfulde bevægelser.",
            example: "\"Hold tension i core'en - slap ikke af!\"",
            category: "body"
        },
        {
            term: "Compression",
            definition: "At presse indad fra begge sider mod et greb eller struktur. Kræver god core-styrke.",
            example: "\"Den arête er ren compression - klem den med hele kroppen\"",
            category: "body"
        },
        {
            term: "Body position",
            definition: "Hvordan kroppen er placeret i forhold til væggen. Afgørende for balance og styrke.",
            example: "\"Dårlig body position er grunden til du ikke kan holde det greb\"",
            category: "body"
        },
        {
            term: "Hips in",
            definition: "At holde hofterne tæt på væggen. Reducerer belastning på armene betydeligt.",
            example: "\"Få dine hofter ind - du hænger for langt væk\"",
            category: "body"
        },
        {
            term: "Straight arms",
            definition: "At hænge på strakte arme for at hvile musklerne og bruge skelettet. Essentielt for udholdenhed.",
            example: "\"Hvil på straight arms mellem de svære træk\"",
            category: "body"
        },
        {
            term: "Lock-off",
            definition: "At holde sig i én arm mens den anden rækker ud efter næste greb.",
            example: "\"Cruxet kræver en stærk lock-off på højre arm\"",
            category: "body"
        },
        {
            term: "Twist lock",
            definition: "En lock-off position hvor man drejer kroppen væk fra den låste arm for ekstra rækkevidde.",
            example: "\"Brug en twist lock for at nå den fjerne crimp\"",
            category: "body"
        },
        {
            term: "Core",
            definition: "Mave- og rygmuskulaturen der stabiliserer kroppen. Kritisk for overhængsklatring.",
            example: "\"Træn mere core hvis du vil blive bedre til overhæng\"",
            category: "body"
        },
        {
            term: "Silent feet",
            definition: "Træningsmetode hvor man placerer fødderne præcist og lydløst. Forbedrer teknik markant.",
            example: "\"Prøv at klatre med silent feet - ingen stampen!\"",
            category: "body"
        },
        {
            term: "Reading",
            definition: "At studere en boulder og visualisere bevægelserne inden man starter.",
            example: "\"Brug tid på at reade problemet - det sparer mange forsøg\"",
            category: "body"
        },
        
        // ===== GRADERING (8 kort) =====
        {
            term: "V-grade",
            definition: "Amerikansk graderingssystem for bouldering. V0 er begynder, V17 er verdens sværeste.",
            example: "\"Jeg arbejder på min første V6 lige nu\"",
            category: "grade"
        },
        {
            term: "Font",
            definition: "Fontainebleau-gradering fra Frankrig. Bruger tal + bogstaver (6A, 7C+). Mest brugt i Europa.",
            example: "\"Den er graderet 7A i font-skalaen\"",
            category: "grade"
        },
        {
            term: "Soft",
            definition: "Når en rute føles lettere end sin gradering.",
            example: "\"Den 6B er mega soft, føles mere som 6A\"",
            category: "grade"
        },
        {
            term: "Sandbagged",
            definition: "Når en rute er hårdere end sin gradering antyder. Typisk i old-school områder.",
            example: "\"Den V4 er totalt sandbagged, det er en solid V5\"",
            category: "grade"
        },
        {
            term: "Benchmark",
            definition: "En klassisk boulder som definerer graden præcist. Bruges til at kalibrere niveau.",
            example: "\"Moonboard benchmarks er gode til at teste sit niveau\"",
            category: "grade"
        },
        {
            term: "Stiff",
            definition: "Synonym for sandbagged - når graden er hårdere end forventet.",
            example: "\"Fontainebleau graderinger er kendt for at være ret stiff\"",
            category: "grade"
        },
        {
            term: "Downgrade",
            definition: "At mene en boulder burde have lavere grad. Kontroversielt i klatremiljøet.",
            example: "\"Folk downgrader den konstant, men jeg synes den er hård\"",
            category: "grade"
        },
        {
            term: "Upgrade",
            definition: "At mene en boulder fortjener højere grad end dens officielle rating.",
            example: "\"Med de betingelser fortjener den en upgrade\"",
            category: "grade"
        },
        
        // ===== GENERELT (20 kort) =====
        {
            term: "Send",
            definition: "At gennemføre en rute/boulder fra bund til top uden at falde.",
            example: "\"Jeg send'ede endelig mit projekt i dag!\"",
            category: "general"
        },
        {
            term: "Flash",
            definition: "At sende en boulder i første forsøg (efter at have set beta eller andre klatre den).",
            example: "\"Nice flash! Jeg så du studerede den først\"",
            category: "general"
        },
        {
            term: "Onsight",
            definition: "At sende en rute i første forsøg uden nogen forhåndsviden eller beta.",
            example: "\"Et onsight tæller mere end et flash\"",
            category: "general"
        },
        {
            term: "Redpoint",
            definition: "At sende en rute efter at have øvet den og fået beta. Det normale mål.",
            example: "\"Jeg redpointede den efter 20 forsøg\"",
            category: "general"
        },
        {
            term: "Beta",
            definition: "Information om hvordan man klatrer en rute - sekvens, greb, teknik.",
            example: "\"Kan du give mig beta til cruxet?\"",
            category: "general"
        },
        {
            term: "Beta spray",
            definition: "At give uønsket beta til nogen. Uhøfligt - spørg altid først!",
            example: "\"Undlad beta spray - lad folk finde ud af det selv\"",
            category: "general"
        },
        {
            term: "Spray",
            definition: "At prale eller snakke for meget om sin klatring. Undgå at spray'e!",
            example: "\"Han sprayer altid om sine sends\"",
            category: "general"
        },
        {
            term: "Project",
            definition: "En boulder man arbejder på over tid og vender tilbage til.",
            example: "\"Den 7B har været mit projekt i tre måneder\"",
            category: "general"
        },
        {
            term: "Crux",
            definition: "Det sværeste sted på en boulder eller rute.",
            example: "\"Cruxet er det store move til sloperen\"",
            category: "general"
        },
        {
            term: "Pump",
            definition: "Når underarmene fyldes med mælkesyre og bliver tunge og svage.",
            example: "\"Jeg var så pumped at jeg ikke kunne holde jugs\"",
            category: "general"
        },
        {
            term: "Dab",
            definition: "At røre noget udenfor boulderen (crashpad, spotter, gulv) under et forsøg. Ugyldiggør sendten.",
            example: "\"Det tæller ikke, du dab'ede på crashpadden\"",
            category: "general"
        },
        {
            term: "Top out",
            definition: "At klatre helt op på toppen af boulderen (ikke bare røre topgrebet).",
            example: "\"Husk at top out'e, den er ikke færdig før du står oppe\"",
            category: "general"
        },
        {
            term: "Problem",
            definition: "En boulder-rute. Kaldes 'problem' fordi man løser det som et puslespil.",
            example: "\"Der er sat nye problemer i overhænget\"",
            category: "general"
        },
        {
            term: "Setter",
            definition: "En person der designer og sætter boulder-problemer.",
            example: "\"Setteren har lavet nogle kreative bevægelser\"",
            category: "general"
        },
        {
            term: "Session",
            definition: "En klatredag eller et fokuseret træningspas på specifikke bouldere.",
            example: "\"Godt session i dag - vi arbejdede på projekterne\"",
            category: "general"
        },
        {
            term: "Send train",
            definition: "Når en gruppe klatrere sender den samme boulder efter hinanden. Høj energi!",
            example: "\"Vi fik en send train kørende - alle sendte!\"",
            category: "general"
        },
        {
            term: "Slab",
            definition: "En væg der hælder bagover (mindre end lodret). Kræver balance og præcision.",
            example: "\"Jeg hader slab - det kræver for meget balance\"",
            category: "general"
        },
        {
            term: "Overhang",
            definition: "En væg der hælder udover lodret. Jo stejlere, jo mere styrke kræves.",
            example: "\"Den 45-graders overhang drænede mig fuldstændigt\"",
            category: "general"
        },
        {
            term: "Roof",
            definition: "Et vandret tag man klatrer under. Det mest krævende for armstyrke og core.",
            example: "\"Roof-sektionen er brutal - der er ingen hvile\"",
            category: "general"
        },
        {
            term: "Arête",
            definition: "En udadgående kant på væggen man kan klatre på eller rundt om.",
            example: "\"Du må gerne bruge arêten, men ikke grebene på den anden side\"",
            category: "general"
        },
        {
            term: "Dihedral",
            definition: "Et indadgående hjørne (det modsatte af arête). Også kaldet 'corner'.",
            example: "\"Brug dihedralen til at stemme dig op med fødderne\"",
            category: "general"
        },
        {
            term: "Burly",
            definition: "En boulder der kræver rå styrke. Ofte overhæng med store bevægelser.",
            example: "\"Den boulder er super burly - ren power endurance\"",
            category: "general"
        },
        {
            term: "Techy",
            definition: "En boulder der kræver præcis teknik og balance frem for styrke.",
            example: "\"Slab-problemerne her er mega techy\"",
            category: "general"
        },
        {
            term: "Reachy",
            definition: "Når bevægelserne favoriserer høje klatrere med lang armspænd.",
            example: "\"Den er super reachy - jeg må bruge en dyno i stedet\"",
            category: "general"
        },
        {
            term: "Morpho",
            definition: "Kort for 'morphological' - når en boulder favoriserer bestemt kropsbygning.",
            example: "\"Den er ret morpho - hårdt for korte klatrere\"",
            category: "general"
        },
        {
            term: "Conditions",
            definition: "Vejr og temperatur der påvirker friktion. Koldt og tørt = gode conditions.",
            example: "\"Vi venter på bedre conditions - det er for varmt nu\"",
            category: "general"
        },
        {
            term: "Skin",
            definition: "Hudens tilstand på fingrene. Frisk skin = bedre friktion, ødelagt skin = splittet hud.",
            example: "\"Jeg må stoppe - min skin er færdig i dag\"",
            category: "general"
        },
        {
            term: "Warm-up",
            definition: "Lette bouldere og bevægelser inden man prøver sit projekt. Vigtigt for skadeforebyggelse!",
            example: "\"Spring aldrig warm-up over - dine fingre takker dig\"",
            category: "general"
        },
        {
            term: "Downclimb",
            definition: "At klatre ned fra toppen i stedet for at hoppe. Bedre for knæ og ankler.",
            example: "\"Husk at downclimbe på de høje bouldere\"",
            category: "general"
        }
    ]
};
