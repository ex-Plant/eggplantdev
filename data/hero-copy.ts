import type { LocaleT } from "@/lib/i18n/types";
import type { HeroCopyT, HeroCopyVariantT } from "@/types/hero-copy-types";

export type HeroCopyKeyT =
  | "glamCosmicBillboard"
  | "soleilAubergine"
  | "metatronsCube"
  | "hexLatticeShrine"
  | "cosmicCultFlyer"
  | "cosmicFlower"
  | "eggplantsInSpace";

export type HeroCopyMapT = Record<HeroCopyKeyT, HeroCopyT>;

export const HERO_COPY: Record<HeroCopyVariantT, Record<LocaleT, HeroCopyMapT>> = {
  default: {
    en: {
      glamCosmicBillboard: {
        subtitle: "Limited Edition",
        titleLine1: "Golden",
        titleLine2: "Eggplant",
        description:
          "A fragrance for the cosmos. Notes of sacred geometry, TypeScript, and freshly deployed produce. Bottled at the event horizon.",
        buttons: ["Pre-Order", "Watch Film"],
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
        titleLine1: "Hex Lattice",
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
    },
    pl: {
      glamCosmicBillboard: {
        subtitle: "Limitowana edycja",
        titleLine1: "Zloty",
        titleLine2: "Baklazan",
        description:
          "Perfumy dla kosmosu. Nuty swietej geometrii, TypeScripta i swiezo wdrozonych warzyw. Rozlane na horyzoncie zdarzen.",
        buttons: ["Zamow w przedsprzedazy", "Obejrzyj film"],
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
    },
  },
  v2: {
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
        subtitle: "Solar Produce Entity",
        titleLine1: "Eggplant",
        titleLine2: "Sun",
        description:
          "Less vegetable, more minor celestial authority. Warm, theatrical, impossible to ignore, and somehow still tasteful.",
      },
      metatronsCube: {
        subtitle: "Universal Wiring Diagram",
        titleLine1: "Metatron's",
        titleLine2: "Cube",
        description:
          "Every serious system starts with structure. For reasons nobody has fully explained, this one also starts with an eggplant.",
      },
      hexLatticeShrine: {
        eyebrow: "Structural Pattern / Core Grid",
        titleLine1: "Hex Lattice",
        titleLine2: "Shrine",
        description:
          "At some point the layout stopped being a layout and became a shrine. The aubergine remains at the center, quietly approving every line, gap, and alignment decision.",
      },
      cosmicCultFlyer: {
        subtitle: "Open Enrollment / Limited Dogma",
        titleLine1: "Cosmic Cult",
        titleLine2: "Flyer",
        description:
          "No robes required. Just strong visual instincts, clean implementation, and a suspicious level of emotional investment in the sacred aubergine.",
        buttonPrimary: "Enter the Order",
        buttonSecondary: "Read the Fine Print",
      },
      cosmicFlower: {
        subtitle: "Signal Still Active",
        titleLine1: "Eggplant",
        titleLine2: "in Space",
        description:
          "The transmission continues: one glossy object drifting through sacred geometry, release cycles, and the occasional perfectly avoidable complication.",
        buttons: ["Track Signal", "Remain Calm"],
      },
      eggplantsInSpace: {
        subtitle: "Cosmic Produce Network",
        titleLine1: "EggPlants",
        titleLine2: "in Space",
        description: "Still out there. Still orbiting. Still somehow passing all the checks.",
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
    },
  },
};
