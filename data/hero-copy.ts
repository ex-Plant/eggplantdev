import type { LocaleT } from "@/lib/i18n/types";
import type { HeroCopyT, HeroCopyVariantT } from "@/types/hero-copy-types";

export type HeroCopyKeyT =
  | "glamCosmicBillboard"
  | "soleilAubergine"
  | "metatronsCube"
  | "hexLatticeShrine"
  | "cosmicCultFlyer"
  | "cosmicFlower"
  | "eggplantsInSpace"
  | "notFound"
  | "celestialAstrolabe"
  | "cosmicCartography"
  | "gridOfLife";

export type HeroCopyMapT = Record<HeroCopyKeyT, HeroCopyT>;

export const HERO_COPY: Record<HeroCopyVariantT, Record<LocaleT, HeroCopyMapT>> = {
  default: {
    en: {
      glamCosmicBillboard: {
        subtitle: "Celestial Luxury / Small Batch",
        titleLine1: "Golden",
        titleLine2: "Eggplant",
        description:
          "A premium object of uncertain purpose and undeniable presence. Distilled from lacquer, star dust, and the kind of frontend confidence that somehow makes the strange idea ship beautifully.",
        buttons: ["View Specimen", "Screen Test"],
      },
      soleilAubergine: {
        subtitle: "Sacred star of the garden",
        titleLine1: "Eggplant",
        titleLine2: "Sun",
        description:
          "A golden ember suspended in the void - the aubergine radiates its divine light across the cosmos, an eternal beacon for those who dare to look upward.",
      },
      metatronsCube: {
        subtitle: "The blueprint of all creation",
        titleLine1: "Metatron's",
        titleLine2: "Cube",
        description:
          "The eggplant exists within the geometric template of the universe - encoded in every vertex, every edge, every platonic form",
      },
      hexLatticeShrine: {
        eyebrow: "Crystalline lattice formation",
        titleLine1: "Celestial",
        titleLine2: "Shrine",
        description:
          "An eggplant rests at the nucleus of an infinite crystal lattice, resonating through every vertex of the cosmic honeycomb.",
      },
      cosmicCultFlyer: {
        subtitle: "The Sacred Order of the Aubergine",
        titleLine1: "Cosmic Cult",
        titleLine2: "Flyer",
        description:
          "You have been chosen. The eggplant sees all. Bring your offerings of TypeScript and deploy with devotion. Meetings are held at every sprint retrospective.",
        buttonPrimary: "Join the Order",
        buttonSecondary: "Read the Scrolls",
      },
      cosmicFlower: {
        subtitle: "Mission Control",
        titleLine1: "Eggplant",
        titleLine2: "in Space",
        description:
          "One aubergine's journey through the cosmos of frontend development, sacred geometry, and questionable deployment decisions.",
        buttons: ["Launch Sequence", "Abort Mission"],
      },
      eggplantsInSpace: {
        subtitle: "Cosmic stellar garden",
        titleLine1: "EggPlants",
        titleLine2: "in Space",
        description: "Shipping produce to the void since the last deployment.",
      },
      notFound: {
        subtitle: "Cosmic stellar garden",
        titleLine1: "Not",
        titleLine2: "Found",
        description: "You drifted past the event horizon. Nothing left but a sacred singularity.",
        buttonPrimary: "Find Your Way Home",
      },
      celestialAstrolabe: {
        subtitle: "Ancient instrument of the void",
        titleLine1: "Celestial",
        titleLine2: "Astrolabe",
        description:
          "A device for measuring the distance between eggplants and stars. Calibrated by monks, powered by cosmic ambition, accurate to the nearest deploy cycle.",
      },
      cosmicCartography: {
        subtitle: "Charting the uncharted",
        titleLine1: "Cosmic",
        titleLine2: "Cartography",
        description:
          "Every eggplant has coordinates. Every orbit has a trajectory. This map reveals the hidden routes between sacred geometry nodes and production servers.",
      },
      gridOfLife: {
        subtitle: "The architecture beneath everything",
        titleLine1: "Grid of",
        titleLine2: "Life",
        description:
          "Sixty-four tetrahedra converge on a single point. At that point: an eggplant. The universe insists on geometric order, and the aubergine obliges.",
      },
    },
    pl: {
      glamCosmicBillboard: {
        subtitle: "Kosmiczny luksus / mala seria",
        titleLine1: "Zloty",
        titleLine2: "Baklazan",
        description:
          "Obiekt premium o nie do konca jasnym przeznaczeniu, ale bezdyskusyjnej prezencji. Destylowany z lakieru, gwiezdnego pylu i frontendowej pewnosci siebie, ktora czasem zamienia dziwny pomysl w pieknie dowieziony projekt.",
        buttons: ["Zobacz okaz", "Test ekranowy"],
      },
      soleilAubergine: {
        subtitle: "Swieta gwiazda ogrodu",
        titleLine1: "Baklazan",
        titleLine2: "Slonce",
        description:
          "Zloty zar zawieszony w pustce - baklazan promieniuje boskim swiatlem przez kosmos, wieczna latarnia dla tych, ktorzy odwaza sie spojrzec w gore.",
      },
      metatronsCube: {
        subtitle: "Plan wszystkiego, co stworzone",
        titleLine1: "Szescian",
        titleLine2: "Metatrona",
        description:
          "Baklazan istnieje wewnatrz geometrycznego szablonu wszechswiata - zakodowany w kazdym wierzcholku, kazdej krawedzi i kazdej formie platonskiej.",
      },
      hexLatticeShrine: {
        eyebrow: "Formacja sieci krystalicznej",
        titleLine1: "Sanktuarium",
        titleLine2: "Sieci Hex",
        description:
          "Baklazan spoczywa w jadrach nieskonczonej sieci krystalicznej, rezonujac przez kazdy wierzcholek kosmicznego plastra miodu.",
      },
      cosmicCultFlyer: {
        subtitle: "Swiety Zakon Baklazana",
        titleLine1: "Kosmiczna",
        titleLine2: "Ulotka Kultu",
        description:
          "Zostales wybrany. Baklazan widzi wszystko. Przynies swoje ofiary z TypeScripta i wdrazaj z oddaniem. Spotkania odbywaja sie na kazdej retrospektywie sprintu.",
        buttonPrimary: "Dolacz do Zakonu",
        buttonSecondary: "Czytaj Zwoje",
      },
      cosmicFlower: {
        subtitle: "Centrum dowodzenia",
        titleLine1: "Baklazan",
        titleLine2: "w Kosmosie",
        description:
          "Podroz jednego baklazana przez kosmos frontendu, swieta geometrie i watpliwe decyzje wdrozeniowe.",
        buttons: ["Sekwencja startowa", "Przerwij misje"],
      },
      eggplantsInSpace: {
        subtitle: "Kosmiczny ogrod gwiezdny",
        titleLine1: "Baklazany",
        titleLine2: "w Kosmosie",
        description: "Dostarczamy warzywa w pustke od ostatniego wdrozenia.",
      },
      notFound: {
        subtitle: "Kosmiczny ogrod gwiezdny",
        titleLine1: "Strona",
        titleLine2: "Nie Znaleziona",
        description: "Ta strona przeszla za horyzont zdarzen. Zostala tylko swieta geometria.",
        buttonPrimary: "Znajdz Droge Do Domu",
      },
      celestialAstrolabe: {
        subtitle: "Pradawny instrument pustki",
        titleLine1: "Niebianski",
        titleLine2: "Astrolabium",
        description:
          "Urzadzenie do mierzenia odleglosci miedzy baklazanami a gwiazdami. Skalibrowane przez mnichow, zasilane kosmiczna ambicja, dokladne do najblizszego cyklu wdrozenia.",
      },
      cosmicCartography: {
        subtitle: "Mapowanie niezmapowanego",
        titleLine1: "Kosmiczna",
        titleLine2: "Kartografia",
        description:
          "Kazdy baklazan ma wspolrzedne. Kazda orbita ma trajektorie. Ta mapa ujawnia ukryte trasy miedzy wezlami swietej geometrii a serwerami produkcyjnymi.",
      },
      gridOfLife: {
        subtitle: "Architektura pod wszystkim",
        titleLine1: "Siatka",
        titleLine2: "Zycia",
        description:
          "Szescdziesiat cztery czworosciany zbiegaja sie w jednym punkcie. W tym punkcie: baklazan. Wszechswiat nalega na porzadek geometryczny, a baklazan sie dostosowuje.",
      },
    },
  },
  v2: {
    en: {
      soleilAubergine: {
        subtitle: "Object #000 Classification: pending",
        titleLine1: "Space",
        titleLine2: "Oddity",
        description:
          "Less vegetable, more minor celestial authority. Warm, theatrical, impossible to ignore, and somehow still tasteful.",
      },

      metatronsCube: {
        subtitle: "Object #001",
        titleLine1: "The",
        titleLine2: "Blueprint",
        description:
          "Every serious system starts with structure. For reasons nobody can fully explain, this one also started with an eggplant.",
      },

      hexLatticeShrine: {
        eyebrow: "Object #002",
        titleLine1: "Peculiar",
        titleLine2: "Shrine",
        description:
          "At some point the layout stopped being a layout and became a shrine. The eggplant remained at the center, supervising alignment and other minor miracles.",
      },
      cosmicFlower: {
        subtitle: "Object #003",
        titleLine1: "Ritual",
        titleLine2: "Operator",
        description: "The singularity emerged, word had to spread. Management wasn't prepared for the eggplant.",
      },

      cosmicCultFlyer: {
        subtitle: "Object #004",
        titleLine1: "The",
        titleLine2: "Code",
        description: "Do not question the eggplant. \nThe eggplant is the question. \nIt works on my machine.",
      },

      glamCosmicBillboard: {
        subtitle: "Object #005: AGI ACHIEVED",
        titleLine1: "Final",
        titleLine2: "Echo",
        description: "Still out there, still orbiting. \n Transmission remains possible",
        buttons: ["Signal to noise", "Scroll to top"],
      },

      eggplantsInSpace: {
        subtitle: "",
        titleLine1: "EggPlants",
        titleLine2: "in Space",
        description: "Still out there. Still orbiting. Still somehow passing all the checks.",
      },

      notFound: {
        subtitle: "Cosmic Produce Network",
        titleLine1: "Not",
        titleLine2: "Found",
        description: "You drifted past the event horizon. Nothing left but a sacred singularity.",
        buttonPrimary: "Find Your Way Home",
      },
      celestialAstrolabe: {
        subtitle: "Precision Instrument / Ceremonial Object",
        titleLine1: "Celestial",
        titleLine2: "Astrolabe",
        description:
          "Part navigation device, part decorative obsession. Measures nothing useful, looks absolutely correct doing it.",
      },
      cosmicCartography: {
        subtitle: "Classified Spatial Index",
        titleLine1: "Cosmic",
        titleLine2: "Cartography",
        description:
          "The map is not the territory, but the territory has concentric rings and an aubergine at the origin. So the map is pretty close.",
      },
      gridOfLife: {
        subtitle: "Structural Inevitability",
        titleLine1: "Grid of",
        titleLine2: "Life",
        description:
          "Dense, interconnected, and unreasonably symmetrical. The kind of geometry that makes you suspect the universe has opinions about tessellation.",
      },
    },
    pl: {
      glamCosmicBillboard: {
        subtitle: "Kosmiczny luksus / mala seria",
        titleLine1: "Zloty",
        titleLine2: "Baklazan",
        description:
          "Obiekt premium o nie do konca jasnym przeznaczeniu, ale bezdyskusyjnej prezencji. Destylowany z lakieru, gwiezdnego pylu i frontendowej pewnosci siebie, ktora czasem zamienia dziwny pomysl w pieknie dowieziony projekt.",
        buttons: ["Zobacz okaz", "Test ekranowy"],
      },
      soleilAubergine: {
        subtitle: "Solarny byt warzywny",
        titleLine1: "Baklazan",
        titleLine2: "Slonce",
        description:
          "Mniej warzywo, bardziej pomniejsze cialo niebieskie z silna osobowoscia. Cieply, teatralny, nie do zignorowania i jakims cudem nadal gustowny.",
      },
      metatronsCube: {
        subtitle: "Uniwersalny schemat polaczen",
        titleLine1: "Szescian",
        titleLine2: "Metatrona",
        description:
          "Kazdy powazny system zaczyna sie od struktury. Z powodow, ktorych nikt do konca nie wyjasnil, ten zaczyna sie tez od baklazana.",
      },
      hexLatticeShrine: {
        eyebrow: "Wzorzec konstrukcyjny / siatka glowna",
        titleLine1: "Sanktuarium",
        titleLine2: "Sieci Hex",
        description:
          "W pewnym momencie layout przestal byc layoutem i stal sie sanktuarium. Baklazan nadal tkwi w centrum, cicho akceptujac kazda linie, przerwe i decyzje o wyrownaniu.",
      },
      cosmicCultFlyer: {
        subtitle: "Nabor otwarty / dogmat ograniczony",
        titleLine1: "Kosmiczna",
        titleLine2: "Ulotka Kultu",
        description:
          "Szaty nie sa wymagane. Wystarcza mocne instynkty wizualne, czysta implementacja i podejrzanie wysoki poziom emocjonalnego zaangazowania w swietego baklazana.",
        buttonPrimary: "Wejdz do zakonu",
        buttonSecondary: "Czytaj drobny druk",
      },
      cosmicFlower: {
        subtitle: "Sygnal nadal aktywny",
        titleLine1: "Baklazan",
        titleLine2: "w Kosmosie",
        description:
          "Transmisja trwa: jeden blyszczacy obiekt dryfuje przez swieta geometrie, cykle release'ow i okazjonalne, calkowicie mozliwe do unikniecia komplikacje.",
        buttons: ["Namierz sygnal", "Zachowaj spokoj"],
      },
      eggplantsInSpace: {
        subtitle: "Kosmiczna siec warzywna",
        titleLine1: "Baklazany",
        titleLine2: "w Kosmosie",
        description: "Nadal tam sa. Nadal orbituja. Nadal jakims cudem przechodza wszystkie testy.",
      },
      notFound: {
        subtitle: "Kosmiczna siec warzywna",
        titleLine1: "Strona",
        titleLine2: "Nie Znaleziona",
        description: "Ta strona przeszla za horyzont zdarzen. Zostala tylko swieta geometria.",
        buttonPrimary: "Znajdz Droge Do Domu",
      },
      celestialAstrolabe: {
        subtitle: "Precyzyjny instrument / obiekt ceremonialny",
        titleLine1: "Niebianski",
        titleLine2: "Astrolabium",
        description:
          "Czesciowo urzadzenie nawigacyjne, czesciowo dekoracyjna obsesja. Nie mierzy niczego przydatnego, ale wyglada przy tym absolutnie poprawnie.",
      },
      cosmicCartography: {
        subtitle: "Tajny indeks przestrzenny",
        titleLine1: "Kosmiczna",
        titleLine2: "Kartografia",
        description:
          "Mapa to nie terytorium, ale terytorium ma koncentryczne pierscienie i baklazana w punkcie poczatkowym. Wiec mapa jest calkiem blisko.",
      },
      gridOfLife: {
        subtitle: "Strukturalna nieuchronnosc",
        titleLine1: "Siatka",
        titleLine2: "Zycia",
        description:
          "Gesta, polaczona i nierozsadnie symetryczna. Ten rodzaj geometrii, ktory sprawia, ze podejrzewasz, iz wszechswiat ma zdanie na temat teselacji.",
      },
    },
  },
};
