export type HomePagePropsT = {
  data: {
    introTxt: string;
    backgroundDesktop: string;
    backgroundMobile: string;
    sections: HomeSectionT[];
  };
};

export type HomeSectionT = ProjectsSectionT | FullSectionT | QuoteSectionT | SimpleSectionT | FieldNotesSectionT;

export type ProjectsSectionT = {
  type: "projects";
  id?: string;
  titleLine: string[];
  text?: string;
  filterCategory?: string;
};

export type FullSectionT = {
  type: "fullSection";
  id?: string;
  titleLine: string[];
  cards: { title: string; content: string }[];
  largePhoto: string;
};

export type QuoteSectionT = {
  type: "quote";
  titleLine: string[];
  quotes: QuoteT[];
};

export type QuoteT = {
  quote: string;
  name: string;
  title: string;
};

export type SimpleSectionT = {
  type: "simple";
  id?: string;
  titleLine: string[];
  text?: string;
  paragraphs?: string[];
  buttons?: { label: string; href: string }[];
};

export type FieldNotesVariantT =
  | "asymmetricGrid"
  | "stackedRows"
  | "signalBoard"
  | "timeline"
  | "numberedMosaic"
  | "orbitalCluster"
  | "brutalistPoster"
  | "constellationMap"
  | "splitLedger"
  | "magneticCards";

export type FieldNoteT = {
  eyebrow: string;
  title: string;
  text: string;
  size?: "standard" | "tall" | "wide";
};

export type FieldNotesSectionT = {
  type: "fieldNotes";
  id: string;
  variant: FieldNotesVariantT;
  titleLine: string[];
  intro: string;
  notes: FieldNoteT[];
  buttons: { label: string; href: string }[];
};

export type SectionPropsT = {
  data: HomeSectionT;
  singleProjectPage?: boolean;
  home?: boolean;
  quote?: boolean;
  isLast?: boolean;
};
