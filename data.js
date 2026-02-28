/* AconSystems • Prompt Maschine • data.js • v0.1.9 */
export const NONE = "-keine Angabe-";

export const CARDS = [
  {
    id: 1,
    title: "1 Grundstil und Mischung",
    group: "base",
    menus: [
      {
        key: "1.1",
        label: "Haupt Genre",
        target: "styles",
        options: [
          "-keine Angabe-",
          "WORLD ETHNIC",
          "COUNTRY",
          "FOLK & ACOUSTIC",
          "POP",
          "ROCK",
          "METAL",
          "PUNK",
          "HIPHOP & RAP",
          "R&B",
          "ELECTRONIC / DANCE",
          "AMBIENT / DOWNTEMPO",
          "SYNTHWAVE / RETROWAVE",
          "JAZZ",
          "SOUL",
          "FUNK",
          "REGGAE",
          "AFROBEAT",
          "LATIN",
          "BLUES",
          "CLASSICAL / ORCHESTRAL",
          "CINEMATIC SCORE",
          "INDUSTRIAL",
          "EXPERIMENTAL / AVANT GARDE",
          "SCHLAGER",
          "VOLKSMUSIK"
        ]
      },
      {
        key: "1.2",
        label: "Sub Genre",
        target: "styles",
        groups: [
          {
            label: "WORLD ETHNIC",
            options: [
              "Arabian",
              "Bhangra",
              "Bollywood",
              "Calypso",
              "Chalga",
              "Egyptian",
              "Hindustani",
              "Jewish Music",
              "Klezmer",
              "Middle East",
              "Polka",
              "Russian Navy Song",
              "Tribal"
            ]
          },
          {
            label: "COUNTRY",
            options: [
              "Appalachian",
              "Bluegrass",
              "Country",
              "Americana",
              "Outlaw Country",
              "Western",
              "Spaghetti Western",
              "Space Country"
            ]
          },
          {
            label: "FOLK & ACOUSTIC",
            options: [
              "Folk",
              "Freak Folk",
              "Indie Folk",
              "Celtic Folk",
              "Nordic / Viking Folk",
              "Medieval Tavern"
            ]
          },
          {
            label: "POP",
            options: [
              "Pop",
              "Indie Pop",
              "Dream Pop",
              "Bedroom Pop",
              "Art Pop",
              "Baroque Pop",
              "Chamber Pop",
              "Synthpop",
              "Dance Pop",
              "Pop Rock",
              "Japan Pop",
              "K Pop",
              "Hyperpop / Glitchcore",
              "New Wave",
              "Neue Romantik",
              "City Pop (Japanese 80s)",
              "80s Pop",
              "Modern Radio",
              "Space Rock",
              "Sunshine Pop",
              "Disco"
            ]
          },
          {
            label: "ROCK",
            options: [
              "Rock",
              "Classic Rock",
              "Alternative Rock",
              "Alt Rock",
              "Indie Rock",
              "Hard Rock",
              "Progressive Rock",
              "Psychedelic Rock",
              "Stoner / Desert Rock",
              "Surf Rock",
              "Shoegaze",
              "Grunge",
              "Math Rock",
              "Emo / Midwest Emo",
              "Glam Rock",
              "Southern Rock",
              "Post Punk",
              "Skate Rock",
              "Skatecore",
              "Blues Rock",
              "Industrial Rock",
              "Medieval Rock",
              "Japan Rock",
              "Italian Rock",
              "Metal Rock",
              "Raga Rock"
            ]
          },
          {
            label: "METAL",
            options: [
              "Metal",
              "Heavy Metal",
              "Power Metal",
              "Thrash Metal",
              "Death Metal",
              "Black Metal",
              "Nu Metal",
              "Metalcore",
              "Deathcore",
              "Progressive Metal",
              "Djent / Prog Metal",
              "Symphonic Metal",
              "Blackgaze",
              "Viking Metal",
              "Folk Metal",
              "Industrial Metal",
              "Sludge Metal",
              "Speed Metal",
              "Funk Metal",
              "Kawaii Metal",
              "Heavy Metal Trap"
            ]
          },
          {
            label: "PUNK",
            options: [
              "Punk",
              "Pop Punk",
              "Hardcore Punk",
              "Post Hardcore",
              "Ska Punk",
              "Ska"
            ]
          },
          {
            label: "HIPHOP & RAP",
            options: [
              "HipHop",
              "Rap",
              "Boom Bap",
              "90s Boom Bap",
              "Trap",
              "Drill",
              "Lo Fi Hip Hop",
              "Mumble Rap",
              "G Funk",
              "Horrorcore",
              "Phonk",
              "Drift Phonk",
              "West Coast Rap"
            ]
          },
          {
            label: "R&B",
            options: [
              "R&B",
              "Neo Soul",
              "Future R&B",
              "Motown / Northern Soul"
            ]
          },
          {
            label: "ELECTRONIC / DANCE",
            options: [
              {
                label: "EDM",
                disabled: true
              },
              "Electro",
              "Electro Swing",
              "Eurodance",
              "High NRG",
              "House",
              "Deep House",
              "Tropical House",
              "Progressive House",
              "Techno",
              "Minimal Techno",
              "Industrial Techno",
              "Melodic Techno",
              "Trance",
              "Euphoric Trance",
              "Psytrance",
              "Drum & Bass",
              "Liquid Drum & Bass",
              "Neurofunk Drum & Bass",
              "Dubstep",
              "Melodic Dubstep",
              "Future Bass",
              "UK Garage / 2 Step",
              "Breakbeat",
              "Glitch Hop",
              "Hardstyle",
              "Italo Disco",
              {
                label: "IDM",
                disabled: true
              },
              "Techno Pop",
              "Cyberpunk",
              "Witch House",
              "Darkwave",
              "Cyberpunk Industrial",
              "Tribal House"
            ]
          },
          {
            label: "AMBIENT / DOWNTEMPO",
            options: [
              "Ambient",
              "Cinematic Ambient",
              "Ambient Drone",
              "Downtempo",
              "Hypnagogic",
              "Frutiger Aero",
              "Drohne"
            ]
          },
          {
            label: "SYNTHWAVE / RETROWAVE",
            options: [
              "Synthwave",
              "Retrowave",
              "Future Funk",
              "Dungeon Synth",
              "Chiptune"
            ]
          },
          {
            label: "JAZZ",
            options: [
              "Jazz",
              "Bebop",
              "Smooth Jazz",
              "Nu Jazz",
              "Jazz Fusion",
              "Latin Jazz",
              "Ragtime"
            ]
          },
          {
            label: "SOUL",
            options: [
              "Soul",
              "Gospel"
            ]
          },
          {
            label: "FUNK",
            options: [
              "Funk",
              "Disco Funk"
            ]
          },
          {
            label: "REGGAE",
            options: [
              "Reggae",
              "Dub",
              "Dancehall",
              "Jamaica Groove"
            ]
          },
          {
            label: "AFROBEAT",
            options: [
              "Afrobeat (classic)",
              "Afrobeats (modern)",
              "Afro Pop",
              "Afro House",
              "Amapiano",
              "Highlife"
            ]
          },
          {
            label: "LATIN",
            options: [
              "Latin",
              "Bossa Nova",
              "Forró",
              "Mambo",
              "Salsa",
              "Tango",
              "Cumbia Psychodelica",
              "Ranchera",
              "Reggaeton"
            ]
          },
          {
            label: "BLUES",
            options: [
              "Blues",
              "Tuareg Blues (Desert Blues)"
            ]
          },
          {
            label: "CLASSICAL / ORCHESTRAL",
            options: [
              "Classical",
              "Chamber Classical",
              "Orchestral",
              "Gregorian Chant",
              "Dark Academia Classical"
            ]
          },
          {
            label: "CINEMATIC SCORE",
            options: [
              "Cinematic Score",
              "Epic Trailer Music",
              "Orchestral Score",
              "Orchestral Hybrid",
              "Video Game / Chiptune"
            ]
          },
          {
            label: "INDUSTRIAL",
            options: [
              "Industrial",
              "Industrial Rock",
              "Industrial Techno",
              "Industrial Metal"
            ]
          },
          {
            label: "EXPERIMENTAL / AVANT GARDE",
            options: [
              "Experimental / Avant Garde",
              "Schmutz",
              "Wackelig"
            ]
          },
          {
            label: "SCHLAGER",
            options: [
              "Deutscher Schlager"
            ]
          },
          {
            label: "VOLKSMUSIK",
            options: [
              "Volksmusik",
              "Marschmusik",
              "Blasmusik",
              "Oberkrainer",
              "Egerländer",
              "Schrammelmusik",
              "Alpenländische Volksmusik",
              "Tanzlmusi",
              "Stubnmusi",
              "Heurigenmusik",
              "Volkslied"
            ]
          }
        ],
        options: []
      },
      {
        key: "1.3",
        label: "Zweit Genre",
        target: "styles",
        options: [
          "-keine Angabe-",
          "WORLD ETHNIC",
          "COUNTRY",
          "FOLK & ACOUSTIC",
          "POP",
          "ROCK",
          "METAL",
          "PUNK",
          "HIPHOP & RAP",
          "R&B",
          "ELECTRONIC / DANCE",
          "AMBIENT / DOWNTEMPO",
          "SYNTHWAVE / RETROWAVE",
          "JAZZ",
          "SOUL",
          "FUNK",
          "REGGAE",
          "AFROBEAT",
          "LATIN",
          "BLUES",
          "CLASSICAL / ORCHESTRAL",
          "CINEMATIC SCORE",
          "INDUSTRIAL",
          "EXPERIMENTAL / AVANT GARDE",
          "SCHLAGER",
          "VOLKSMUSIK"
        ]
      },
      {
        key: "1.4",
        label: "Ära & Vibe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Vaporwave",
          "City Pop",
          "80s Retro",
          "90s Vibe",
          "Modern Radio",
          "Underground Club",
          "Vintage Analog",
          "Glitchy Experimental",
          "Acoustic Unplugged",
          "Cinematic Trailer",
          "Dreamy Gaze Rock",
          "Darkwave",
          "Orchestral Hybrid",
          "Chiptune Game"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "2 Song Basics",
    group: "base",
    menus: [
      {
        key: "2.1",
        label: "Grundstimmung Kammerton",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Kammerton A4 432 Hz",
          "Kammerton A4 440 Hz"
        ]
      },
      {
        key: "2.2",
        label: "Song Feeling",
        target: "styles",
        options: [
          "-keine Angabe-",
          "hell & neugierig",
          "bittersüß & hoffnungsvoll",
          "dunkel & verspielt",
          "elegant & nächtlich",
          "gemütlich & festlich",
          "mystisch & geheimnisvoll",
          "heroisch & triumphal",
          "melancholisch & reflektiert",
          "romantisch & warm",
          "ruhig & meditativ",
          "intensiv & kathartisch",
          "psychedelisch & surreal",
          "noir & urban",
          "ätherisch & kosmisch",
          "ominös & dystopisch",
          "futuristisch & technoid",
          "organisch & erdig",
          "luxuriös & nostalgisch",
          "spirituell & andächtig",
          "bedrohlich & spannungsvoll",
          "verspielt & schelmisch"
        ]
      },
      {
        key: "2.3",
        label: "Song Drive",
        target: "styles",
        options: [
          "-keine Angabe-",
          "low energy",
          "mid energy",
          "high energy",
          "steady pulse",
          "slow burn",
          "head nod",
          "mid-tempo bounce",
          "laid-back swing",
          "driving",
          "dancefloor",
          "four-on-the-floor",
          "house glide",
          "disco strut",
          "syncopated funk-push",
          "broken-beat drive",
          "halftime swagger",
          "trap lean",
          "d&b sprint",
          "uk-garage skip",
          "afrobeats groove",
          "amapiano log-drum sway",
          "reggae skank",
          "cumbia shuffle",
          "glitch-step jolt",
          "polyrhythmisch verwoben",
          "hypnotischer trance-flow",
          "mosh-pit energie",
          "cinematic march",
          "wide epic",
          "intimate close"
        ]
      },
      {
        key: "2.4",
        label: "Cinematic Tag",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Familien-Wunder",
          "whimsical & classy",
          "animiertes Finale",
          "Cyberpunk-Neon-Chase",
          "Spaghetti-Western-Showdown",
          "Dungeon-Crawl-Atmosphäre",
          "epischer Trailer-Rise",
          "Noir-City im Regen",
          "Dark-Academia Kammer",
          "Space-Opera Vista",
          "Retro-Arcade Montage",
          "Rom-Com Glow",
          "Short-Victory Montage",
          "Horror Tension Pulse",
          "Mystischer Wald-Quest",
          "Mittelalter-Taverne",
          "Natur-Melange Welt",
          "Ocean-Look Panorama",
          "Docu-Andacht Ritual",
          "Steampunk-Parade",
          "Fairytale Ballet",
          "Sci-Fi Erkundung",
          "Bollywood-Feier",
          "Wikinger-Saga",
          "emotional climax"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "3 Vocals",
    group: "base",
    menus: [
      {
        key: "3.1",
        label: "Voice Rolle",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Instrumental ohne Gesang (Instrumental)",
          "Vocal Song",
          "Lead Vocal (m)",
          "Lead Vocal (w)",
          "Duett (m + w) (Duo)",
          "Chor (Choir)",
          "A cappella Chor (A cappella)",
          "Lead + Chor Pads",
          "Background Vocals",
          "Ad libs",
          "Chant",
          "Call & Response",
          "Gang Shouts",
          "Rap Verses",
          "Rap Vocal",
          "Rap Vocal Flow",
          "Hook Chorus Focus",
          "Spoken Word / Erzähler (Spoken Word)",
          "Dialogue (Dialog)",
          "Spoken Vocals",
          "Rhythmic Spoken Vocals",
          "Talk sing",
          "Talk singing",
          "Talk singing rhythmic",
          "Scat / Jazz Vocal",
          "Opern Stimme",
          "Kinderchor Lead",
          "Kehlkopf Obertongesang",
          "5nne=VokarcDn",
          "Pfeifen / Humming Lead",
          "Instrumental Lead E Gitarre",
          "Instrumental Lead Saxophon",
          "Instrumental Lead Violine",
          "Instrumental Lead Piano",
          "Instrumental Lead Synth",
          "World Saiten Lead (Sitar / Oud / Baglama)"
        ]
      },
      {
        key: "3.2",
        label: "Voice Farbe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Female Alto",
          "Female Soprano",
          "Male Tenor",
          "Male Baritone",
          "Falsett Lead (m)",
          "Bariton Crooner (m)",
          "Power Belt (w)",
          "Airy Whisper",
          "Flüster Gesang intim",
          "Smooth Croon",
          "Powerful Belt",
          "Deep and dirty",
          "Soulful",
          "Dreamy",
          "Playful",
          "Dramatic",
          "Emotional",
          "Intimate",
          "Energetic",
          "Aggressive",
          "Scream / Harsh Vocal"
        ]
      },
      {
        key: "3.3",
        label: "Voice Stil",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Emotional",
          "Intimate",
          "Energetic",
          "Aggressive",
          "Dreamy",
          "Soulful",
          "Playful",
          "Dramatic",
          "Talk sing",
          "Deep and dirty"
        ]
      },
      {
        key: "3.4",
        label: "Voice Effekte & Technik",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Double tracking",
          "Harmonies",
          "Autotune subtle",
          "Autotune obvious",
          "Vocoder",
          "Vocoder Robot Lead",
          "Reverb heavy",
          "Delay throws",
          "Phone filter",
          "Distorted vocal"
        ]
      },
      {
        key: "3.5",
        label: "Vocals Style Tags",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Acapella",
          "Chor"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4 Song Typ",
    group: "base",
    menus: [
      {
        key: "4.1",
        label: "Aufname und Groove Quelle",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Live band",
          "One take live feel",
          "Studio polished",
          "Programmed drums",
          "Live drums",
          "Hybrid electronic live",
          "Quantized tight",
          "Humanized loose"
        ]
      },
      {
        key: "4.2",
        label: "Dichte & Arrangement",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Ultra minimal Mono Linie + Drone",
          "Minimal",
          "Sparse",
          "Full",
          "Lush",
          "Layered",
          "Wall of sound",
          "Intimes Duo mit Raum",
          "Tightes Trio Pocket",
          "Subtile Pad Unterlage",
          "Mittlere Dichte Groove Pocket",
          "Pointillistische Plucks",
          "Rhythmische Mosaik Verzahnung",
          "Kontrapunktisches Gewebe",
          "Ostinato Motor + Motive",
          "3 bis 5 stimmige Layers",
          "Gestapelte Chor Pads",
          "Lush Strings / Pad Beds",
          "Chaotisch / Überladen"
        ]
      },
      {
        key: "4.3",
        label: "Raum & Bühne",
        target: "styles",
        options: [
          "-keine Angabe-",
          "Dry intimate",
          "Trocken nah kleiner Raum",
          "Roomy",
          "Breite Stereo Bühne",
          "Wide cinematic",
          "Wide epic",
          "Intimate close",
          "Negative space stop and go"
        ]
      },
      {
        key: "4.4",
        label: "Textur und Bearbeitung",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Airy",
          "Clean",
          "Gritty",
          "Sättigungs haze",
          "Noisy lo fi grit",
          "Glitch Schwarm micro edits",
          "Sidechain atmen",
          "Druckvoll komprimiert",
          "Percussive barrage"
        ]
      },
      {
        key: "4.5",
        label: "Dramaturgie & Entwicklung",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Kinematische swells / crescendi",
          "Kontrast dünne Verse / große drops",
          "Breakdown getriebene dynamik",
          "Entwicklung dünn -> dicht",
          "Traum mit verwachsenem hall",
          "Explosive drop",
          "Steady pulse"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "5 Tempo und Groove",
    group: "base",
    menus: [
      {
        key: "5.1",
        label: "Tempo BPM",
        target: "styles",
        options: [
          "-keine Angabe-",
          "60 BPM",
          "70 BPM",
          "72 BPM",
          "80 BPM",
          "84 BPM",
          "90 BPM",
          "96 BPM",
          "100 BPM",
          "108 BPM",
          "120 BPM",
          "128 BPM",
          "138 BPM",
          "140 BPM",
          "150 BPM",
          "160 BPM",
          "170 BPM"
        ]
      },
      {
        key: "5.2",
        label: "Groove Gefühl",
        target: "styles",
        options: [
          "-keine Angabe-",
          "straight",
          "swing",
          "shuffle",
          "halftime",
          "doubletime",
          "syncopated",
          "offbeat",
          "4 on the floor",
          "breakbeat",
          "funk pocket",
          "jamaica groove skank",
          "latin groove"
        ]
      },
      {
        key: "5.3",
        label: "Taktart Metrik",
        target: "styles",
        options: [
          "-keine Angabe-",
          "4/4",
          "3/4",
          "6/8",
          "12/8",
          "5/4",
          "7/8",
          "polyrhythmic",
          "metric modulation"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "6 Drums und Beat Design",
    group: "base",
    menus: [
      {
        key: "6.1",
        label: "Drum Charakter",
        target: "styles",
        options: [
          "-keine Angabe-",
          "tight punchy kit",
          "big arena kit",
          "dry vintage kit",
          "lo fi dusty kit",
          "trap 808 kit",
          "techno kick focused",
          "dnb crisp kit",
          "jazz brush kit",
          "funk tight snare"
        ]
      },
      {
        key: "6.2",
        label: "Feel und Notenbild",
        target: "styles",
        options: [
          "-keine Angabe-",
          "machine tight",
          "humanized",
          "ghost notes",
          "complex fills",
          "minimal groove",
          "rolling patterns",
          "stutter edits",
          "glitch cuts",
          "stop start breaks"
        ]
      },
      {
        key: "6.3",
        label: "Metal und Luft",
        target: "styles",
        options: [
          "-keine Angabe-",
          "crisp hi hats",
          "open hat accents",
          "ride driven",
          "splashy cymbals",
          "muted hats",
          "shaker hats",
          "broken hats",
          "hat triplets"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "7 Percussion Layer",
    group: "base",
    menus: [
      {
        key: "7.1",
        label: "Percussion Welt",
        target: "styles",
        options: [
          "-keine Angabe-",
          "congas",
          "bongos",
          "timbales",
          "djembe",
          "taiko",
          "darbuka",
          "tabla",
          "cajon",
          "claves",
          "agogo",
          "bar chimes",
          "wather drum",
          "body drum"
        ]
      },
      {
        key: "7.2",
        label: "Akzente und Klicks",
        target: "styles",
        options: [
          "-keine Angabe-",
          "rim clicks",
          "hand claps",
          "snaps",
          "woodblocks",
          "cowbell",
          "tambourine",
          "triangle",
          "finger percussion",
          "stomp claps",
          "maracas",
          "rain stick"
        ]
      },
      {
        key: "7.3",
        label: "Percussion Effekte",
        target: "styles",
        options: [
          "-keine Angabe-",
          "reverse hits",
          "risers",
          "impacts",
          "whooshes",
          "vinyl crackle",
          "tape stop",
          "gated hits",
          "granular ticks"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "8 Bass Low End",
    group: "base",
    menus: [
      {
        key: "8.1",
        label: "Bass Bauform",
        target: "styles",
        options: [
          "-keine Angabe-",
          "electric bass",
          "upright bass",
          "synth bass",
          "sub bass",
          "808 bass",
          "reese bass",
          "acid bass",
          "funk slap bass"
        ]
      },
      {
        key: "8.2",
        label: "Bass Bewegung",
        target: "styles",
        options: [
          "-keine Angabe-",
          "walking bass",
          "staccato pulses",
          "sustained notes",
          "syncopated funk",
          "sliding glides",
          "octave jumps",
          "simple root notes",
          "melodic bassline"
        ]
      },
      {
        key: "8.3",
        label: "Bass Farbe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "warm round",
          "clean DI",
          "gritty amp",
          "distorted",
          "sidechained pump",
          "deep sub heavy",
          "mid bass growl",
          "lo fi muffled"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "9 Gitarren und Clav",
    group: "base",
    menus: [
      {
        key: "9.1",
        label: "Gitarren Aufgabe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "rhythm guitar",
          "lead guitar",
          "arpeggios",
          "riffs",
          "palm mute chugs",
          "clean chords",
          "acoustic strumming",
          "funk comping"
        ]
      },
      {
        key: "9.2",
        label: "Hook und Leitlinie",
        target: "styles",
        options: [
          "-keine Angabe-",
          "catchy riff hook",
          "melodic lead hook",
          "call and response",
          "octave lead",
          "harmonized leads",
          "wah lead",
          "tremolo picking"
        ]
      },
      {
        key: "9.3",
        label: "Amp und Effekte",
        target: "styles",
        options: [
          "-keine Angabe-",
          "clean chorus",
          "crunchy overdrive",
          "heavy distortion",
          "fuzz",
          "phaser",
          "delay shimmer",
          "spring reverb",
          "tape echo",
          "wah wah"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "10 Tasten und Synth",
    group: "base",
    menus: [
      {
        key: "10.1",
        label: "Keys Basis",
        target: "styles",
        options: [
          "-keine Angabe-",
          "piano",
          "electric piano",
          "organ",
          "clavinet",
          "harpsichord",
          "strings pad",
          "brass stabs",
          "bell keys"
        ]
      },
      {
        key: "10.2",
        label: "Synth Motor",
        target: "styles",
        options: [
          "-keine Angabe-",
          "arpeggiator",
          "supersaw lead",
          "analog mono lead",
          "pluck synth",
          "fm keys",
          "wavetable motion",
          "trance gate",
          "step seq pattern"
        ]
      },
      {
        key: "10.3",
        label: "Glitzer und Spielzeug",
        target: "styles",
        options: [
          "-keine Angabe-",
          "marimba",
          "vibraphone",
          "glockenspiel",
          "kalimba",
          "music box",
          "toy piano",
          "celesta",
          "maul trommel",
          "theremin",
          "daumen klavier",
          "shrutibox"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "11 Ear Candy und Kontrast",
    group: "base",
    menus: [
      {
        key: "11.1",
        label: "Details und Sprenkel",
        target: "styles",
        options: [
          "-keine Angabe-",
          "ear candy",
          "glitch sprinkles",
          "vocal chops",
          "laser synth hits",
          "accent risers",
          "tiny fills",
          "one shot samples",
          "surprise stops"
        ]
      },
      {
        key: "11.2",
        label: "Raum und Wiederholung",
        target: "styles",
        options: [
          "-keine Angabe-",
          "big reverb",
          "small room",
          "slapback delay",
          "ping pong delay",
          "dub delay",
          "shimmer reverb",
          "gated reverb",
          "long tail ambience"
        ]
      },
      {
        key: "11.3",
        label: "Schnitte und Pausen",
        target: "styles",
        options: [
          "-keine Angabe-",
          "dropout breaks",
          "sudden mute",
          "stop time hits",
          "filter break",
          "pre drop silence",
          "half bar pause",
          "sparse breakdown"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "12 Harmonie und Tonalität",
    group: "base",
    menus: [
      {
        key: "12.1",
        label: "Tonal Stimmung",
        target: "styles",
        options: [
          "-keine Angabe-",
          "major key bright",
          "minor key dark",
          "modal",
          "dorian",
          "phrygian",
          "lydian",
          "harmonic minor",
          "pentatonic"
        ]
      },
      {
        key: "12.2",
        label: "Akkord Textur",
        target: "styles",
        options: [
          "-keine Angabe-",
          "jazzy extended chords",
          "simple triads",
          "power chords",
          "sus chords",
          "lush voicings",
          "tight close voicings",
          "open wide voicings"
        ]
      },
      {
        key: "12.3",
        label: "Spannungs Moves",
        target: "styles",
        options: [
          "-keine Angabe-",
          "modulation",
          "key change",
          "chromatic passing chords",
          "pedal point",
          "tension release",
          "polytonal touch",
          "dissonant spice",
          "resolving cadence"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "13 Struktur und Form",
    group: "base",
    menus: [
      {
        key: "13.1",
        label: "Form Bauplan",
        target: "styles",
        options: [
          "-keine Angabe-",
          "intro verse chorus verse chorus bridge final chorus outro",
          "verse prechorus chorus",
          "build drop build drop",
          "through composed",
          "loop based",
          "cinematic arc"
        ]
      },
      {
        key: "13.2",
        label: "Feature Slots",
        target: "styles",
        options: [
          "-keine Angabe-",
          "guitar solo",
          "sax solo",
          "synth solo",
          "piano solo",
          "drum break",
          "bass solo",
          "no solo"
        ]
      },
      {
        key: "13.3",
        label: "Endbild",
        target: "styles",
        options: [
          "-keine Angabe-",
          "fade out",
          "big ending hit",
          "quiet acoustic coda",
          "abrupt stop",
          "reprise ending",
          "long ambient tail"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "14 Mix und Master",
    group: "base",
    menus: [
      {
        key: "14.1",
        label: "Raum Gefühl",
        target: "styles",
        options: [
          "-keine Angabe-",
          "dry close",
          "room ambience",
          "big hall",
          "plate reverb",
          "spring reverb",
          "cinematic wide"
        ]
      },
      {
        key: "14.2",
        label: "Breite und Tiefe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "wide stereo",
          "mono centered",
          "deep front to back",
          "layered depth",
          "tight mono low end",
          "wide pads"
        ]
      },
      {
        key: "14.3",
        label: "Finish Ziel",
        target: "styles",
        options: [
          "-keine Angabe-",
          "warm analog",
          "bright modern",
          "punchy loud",
          "lo fi tape",
          "crisp clean",
          "dark heavy",
          "unmastered mix",
          "keep -3 db headroom",
          "output peak -3db",
          "premaster mix",
          "natural dynamics"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "15 Ausschlüsse 1 Negative Prompt",
    group: "base",
    menus: [
      {
        key: "15.1",
        label: "Nicht diese Richtung",
        target: "styles",
        options: [
          "-keine Angabe-",
          "jazz swing",
          "schlager",
          "polka",
          "kids music",
          "acoustic campfire",
          "banjo folk",
          "comedy novelty",
          "heavy metal shredding",
          "dubstep wobble"
        ]
      },
      {
        key: "15.2",
        label: "Nicht diese Fehler",
        target: "styles",
        options: [
          "-keine Angabe-",
          "muddy mix",
          "harsh sibilance",
          "clipping",
          "distorted master",
          "low quality artifacts",
          "messy drums",
          "excessive reverb",
          "out of tune vocals"
        ]
      },
      {
        key: "15.3",
        label: "Nicht diese Stimmung",
        target: "styles",
        options: [
          "-keine Angabe-",
          "overly happy",
          "overly sad ballad",
          "cheesy inspirational",
          "comedic tone",
          "spooky horror",
          "romantic kitsch"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "16 Ausschlüsse 2 Negative Prompt",
    group: "special",
    menus: [
      {
        key: "16.1",
        label: "No Go Genres und Vibes",
        target: "styles",
        options: [
          "-keine Angabe-",
          "schlager",
          "volkstümlich",
          "mallorca party",
          "apres ski",
          "ballermann",
          "karaoke backing track",
          "novelty song"
        ]
      },
      {
        key: "16.2",
        label: "No Go Vocals und Sounds",
        target: "styles",
        options: [
          "-keine Angabe-",
          "chipmunk voice",
          "child vocals",
          "novelty character voice",
          "overly theatrical operatic",
          "cheap midi",
          "stock presets"
        ]
      }
    ]
  },
  {
    id: 17,
    title: "17 Specials",
    group: "special",
    menus: [
      {
        key: "17.1",
        label: "Audio Qualität und Technik",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "high fidelity",
          "studio quality",
          "pristine mix",
          "clean master",
          "punchy transients",
          "deep low end",
          "silky highs"
        ]
      },
      {
        key: "17.2",
        label: "Sprache und Artikulation",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "clear german pronunciation",
          "native german accent",
          "intelligible vocals",
          "articulate phrasing",
          "clean consonants",
          "less mumbling"
        ]
      },
      {
        key: "17.3",
        label: "Groove Rhythmus Style Tags",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Breakbeat",
          "Federnd",
          "Tanzbar",
          "Pulsierend",
          "Schwingen",
          "Staccato",
          "Skittern",
          "Sputtern"
        ]
      },
      {
        key: "17.4",
        label: "Produktion Raum Signal Style Tags",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Binaural",
          "Bitcrushed",
          "Feldaufnahmen",
          "Nachhall",
          "Übersteuert",
          "Panne"
        ]
      },
      {
        key: "17.5",
        label: "Stimmung Energie Atmosphäre Style Tags",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Hell",
          "Himmlisch",
          "Euphorisch",
          "Wohlfühlen",
          "Nervös",
          "Eindringlich",
          "Schwer",
          "Hohe Energie",
          "Hypnotisch",
          "Melancholisch",
          "Geheimnisvoll",
          "Gruselig",
          "Süß",
          "Gedämpft",
          "Spannend",
          "Surreal",
          "Transzendent",
          "Tropisch"
        ]
      },
      {
        key: "17.6",
        label: "Sound Textur Charakter Style Tags",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Basslastig",
          "Tiefer Bass",
          "Collage",
          "Klangcollage",
          "Textural",
          "Geschichtet",
          "Üppig",
          "Spärlich",
          "Minimalistisch",
          "Spektral",
          "Stachelig",
          "Seidig",
          "Brutzelnd",
          "Schlammig",
          "Bissig",
          "Sonic",
          "Spacey",
          "Synthetisch",
          "Tonal"
        ]
      },
      {
        key: "17.7",
        label: "Stil Richtung Einflüsse Style Tags",
        target: "styles",
        multi: true,
        options: [
          "-keine Angabe-",
          "Genreübergreifend",
          "Eklektisch",
          "Elektronisch beeinflusst",
          "Indie beeinflusst",
          "Industrieller Sound",
          "Experimentelle Elektronik",
          "Progressiv",
          "Raffiniert",
          "Retro",
          "Neoklassizistisch",
          "Klassisch",
          "Kammer",
          "Mikrotonal",
          "Thematisch",
          "Rifflastig",
          "Vom Land geprägt",
          "Rebellisch",
          "Mutig",
          "Klagend",
          "Satirisch",
          "Ausgefallen",
          "Verblasst",
          "Geschleift",
          "Phasenweise",
          "Pionierarbeit",
          "Gezahnt",
          "Glatt",
          "Donnernd",
          "Dampfig",
          "Stellar",
          "Straße",
          "Sumpfig"
        ]
      }
    ]
  },
  {
    id: 18,
    title: "18 Spezial Instrumente",
    group: "special",
    menus: [
      {
        key: "18.1",
        label: "Instrumente 1 Bläser und Flöten selten",
        target: "styles",
        options: [
          "-keine Angabe-",
          "fujara",
          "contrabass flute",
          "bass flute",
          "shakuhachi",
          "duduk",
          "contrabass saxophone",
          "bass saxophone",
          "baritone saxophone",
          "bass clarinet",
          "contrabass clarinet",
          "sarrusophone",
          "blues harmonika",
          "didgeridoo"
        ]
      },
      {
        key: "18.2",
        label: "Instrumente 2 Saiten und Zupf exotisch",
        target: "styles",
        options: [
          "-keine Angabe-",
          "berimbau",
          "hurdy gurdy",
          "nyckelharpa",
          "oud",
          "bouzouki",
          "saz",
          "kora",
          "kalimba",
          "sitar",
          "shamisen",
          "koto",
          "balalaika",
          "hammered dulcimer",
          "alpine zither",
          "harp"
        ]
      },
      {
        key: "18.3",
        label: "Instrumente 3 Trommeln und Percussion selten",
        target: "styles",
        options: [
          "-keine Angabe-",
          "bougarabou",
          "goumbe",
          "frame drum",
          "bodhran",
          "djembe",
          "darbuka",
          "tabla",
          "taiko",
          "udu drum",
          "talking drum",
          "timbales"
        ]
      }
    ]
  },
  {
    id: 19,
    title: "19 Advanced Controls",
    group: "special",
    menus: [
      {
        key: "19.1",
        label: "Style Impact",
        target: "styles",
        options: [
          "-keine Angabe-",
          "low style impact",
          "medium style impact",
          "high style impact"
        ]
      },
      {
        key: "19.2",
        label: "Weirdness",
        target: "styles",
        options: [
          "-keine Angabe-",
          "low weirdness",
          "medium weirdness",
          "high weirdness"
        ]
      }
    ]
  },
  {
    id: 20,
    title: "20 Referenzen und Ära",
    group: "special",
    menus: [
      {
        key: "20.1",
        label: "Era Vibe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "60s",
          "70s",
          "80s",
          "90s",
          "2000s",
          "2010s",
          "modern",
          "retro"
        ]
      },
      {
        key: "20.2",
        label: "Produktionsästhetik",
        target: "styles",
        options: [
          "-keine Angabe-",
          "analog tape",
          "vinyl era",
          "radio ready",
          "club mix",
          "cinematic mix",
          "live room",
          "dry close mic",
          "wide stadium"
        ]
      }
    ]
  },
  {
    id: 21,
    title: "21 Hook und Dramaturgie",
    group: "special",
    menus: [
      {
        key: "21.1",
        label: "Hook Stärke",
        target: "styles",
        options: [
          "-keine Angabe-",
          "hook heavy",
          "chorus anthem",
          "strong motif",
          "earworm riff",
          "minimal hook"
        ]
      },
      {
        key: "21.2",
        label: "Kontrast Dramaturgie",
        target: "styles",
        options: [
          "-keine Angabe-",
          "tension and release",
          "big drop",
          "slow build",
          "sudden breaks",
          "steady hypnotic"
        ]
      }
    ]
  },
  {
    id: 22,
    title: "22 Songaufbau Start Bausteine",
    group: "special",
    menus: [
      {
        key: "22.1",
        label: "Song Syntax Tags Sektionen",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[Intro]",
          "[Hook]",
          "[Pre-Chorus]",
          "[Chorus]",
          "[Verse]",
          "[Interlude]",
          "[Break]",
          "[Movement]",
          "[Instrumental]",
          "[Solo]",
          "[Build]",
          "[Bridge]",
          "[Outro]",
          "[End]",
          "[<vocals>]",
          "[<specific instrument>]"
        ]
      },
      {
        key: "22.2",
        label: "Intro Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[INTRO instrumental 4 bars]",
          "[INTRO instrumental 8 bars]",
          "[INTRO ambient pads 4 bars]",
          "[INTRO drum pickup 2 bars]",
          "[INTRO spoken tag 2 bars]",
          "[INTRO choir swell 4 bars]",
          "[INTRO guitar riff 4 bars]"
        ]
      },
      {
        key: "22.3",
        label: "Pre Entry Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[PRE-VERSE 2 bars]",
          "[PRE-VERSE 4 bars]",
          "[PRE-CHORUS 4 bars]",
          "[BUILD 4 bars]",
          "[BREAK 2 bars]",
          "[DROP-IN 1 bar]"
        ]
      },
      {
        key: "22.4",
        label: "Verse Start Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[VERSE 8 bars]",
          "[VERSE 12 bars]",
          "[VERSE 16 bars]",
          "[VERSE half-time 8 bars]",
          "[VERSE minimal 8 bars]",
          "[VERSE rap 16 bars]"
        ]
      }
    ]
  },
  {
    id: 23,
    title: "23 Songaufbau Mitte Bausteine",
    group: "special",
    menus: [
      {
        key: "23.1",
        label: "Chorus Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[CHORUS 8 bars]",
          "[CHORUS 12 bars]",
          "[CHORUS anthem 8 bars]",
          "[CHORUS hook-only 8 bars]",
          "[CHORUS choir 8 bars]",
          "[CHORUS double-time 8 bars]"
        ]
      },
      {
        key: "23.2",
        label: "Bridge Solo Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[BRIDGE 8 bars]",
          "[BRIDGE 12 bars]",
          "[BREAKDOWN 8 bars]",
          "[INSTRUMENTAL BREAK 8 bars]",
          "[SOLO 8 bars]",
          "[SOLO 16 bars]",
          "[DROP 8 bars]"
        ]
      },
      {
        key: "23.3",
        label: "Wiederholung Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[VERSE then CHORUS repeat]",
          "[CHORUS twice]",
          "[CHORUS with key lift]",
          "[CHORUS with new drums]",
          "[FINAL CHORUS extended]"
        ]
      }
    ]
  },
  {
    id: 24,
    title: "24 Songaufbau Ende Bausteine",
    group: "special",
    menus: [
      {
        key: "24.1",
        label: "Finale Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[FINAL CHORUS 12 bars]",
          "[FINAL CHORUS 16 bars]",
          "[FINAL CHORUS big ending]",
          "[FINAL CHORUS quiet lift]",
          "[FINAL CHORUS half-time]"
        ]
      },
      {
        key: "24.2",
        label: "Outro Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[OUTRO instrumental 4 bars]",
          "[OUTRO instrumental 8 bars]",
          "[OUTRO ambient tail]",
          "[OUTRO fade out]",
          "[OUTRO hard stop]",
          "[OUTRO acoustic coda]"
        ]
      },
      {
        key: "24.3",
        label: "Twist Klammern",
        target: "styles",
        options: [
          "-keine Angabe-",
          "[KEY CHANGE up]",
          "[TEMPO SHIFT]",
          "[DROP TO MINIMAL]",
          "[CHOIR CODA]",
          "[DRUMS ONLY BREAK]",
          "[A CAPPELLA END]"
        ]
      }
    ]
  },
  {
    id: 25,
    title: "25 Spur Generator Modus",
    group: "special",
    menus: [
      {
        key: "25.1",
        label: "Zielspur",
        target: "styles",
        options: [
          "-keine Angabe-",
          "add guitar layer",
          "add bass line",
          "add synth pads",
          "add piano layer",
          "add strings layer",
          "add brass stabs",
          "add percussion layer",
          "add drums variation",
          "add lead melody",
          "add countermelody"
        ]
      },
      {
        key: "25.2",
        label: "Kontext Source",
        target: "styles",
        options: [
          "-keine Angabe-",
          "from uploaded reference",
          "from existing suno song",
          "from stem timeline",
          "match the current groove",
          "match the current harmony",
          "match the current tempo"
        ]
      },
      {
        key: "25.3",
        label: "Eingriff Tiefe",
        target: "styles",
        options: [
          "-keine Angabe-",
          "minimal layer only",
          "subtle support",
          "medium arrangement",
          "bold layer",
          "experimental layer",
          "sparse only",
          "no extra instruments"
        ]
      }
    ]
  },
  {
    id: 26,
    title: "26 Spur Regeln und Mix",
    group: "special",
    menus: [
      {
        key: "26.1",
        label: "Muss stabil bleiben",
        target: "styles",
        options: [
          "-keine Angabe-",
          "keep tempo locked",
          "keep key center",
          "keep chord progression",
          "keep groove pocket",
          "keep drum pattern",
          "keep vocal untouched",
          "keep melody untouched"
        ]
      },
      {
        key: "26.2",
        label: "Platz im Mix",
        target: "styles",
        options: [
          "-keine Angabe-",
          "background texture",
          "mid support",
          "foreground lead",
          "wide stereo bed",
          "mono center",
          "left right call",
          "tucked under vocals"
        ]
      },
      {
        key: "26.3",
        label: "Klangziel",
        target: "styles",
        options: [
          "-keine Angabe-",
          "clean DI",
          "amp grit",
          "warm analog",
          "modern bright",
          "dark moody",
          "cinematic wide",
          "lo fi texture",
          "pristine studio"
        ]
      }
    ]
  },
  {
    id: 27,
    title: "27 Spur Timing und Slots",
    group: "special",
    menus: [
      {
        key: "27.1",
        label: "Einsatz Stelle",
        target: "styles",
        options: [
          "-keine Angabe-",
          "add only in intro",
          "add only in verses",
          "add only in choruses",
          "add only in bridge",
          "add only in outro",
          "add only in breakdown",
          "add throughout"
        ]
      },
      {
        key: "27.2",
        label: "Rhythmik Verhalten",
        target: "styles",
        options: [
          "-keine Angabe-",
          "simple whole notes",
          "syncopated pattern",
          "arpeggiated",
          "riff based",
          "ostinato",
          "call and response",
          "accent hits only",
          "sparse stabs"
        ]
      },
      {
        key: "27.3",
        label: "Komplexität",
        target: "styles",
        options: [
          "-keine Angabe-",
          "very simple",
          "simple",
          "medium",
          "complex",
          "very complex",
          "improvised feel",
          "tightly composed"
        ]
      }
    ]
  }
];
