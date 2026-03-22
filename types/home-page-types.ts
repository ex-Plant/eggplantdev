export type HomePagePropsT = {
  data: {
    introTxt: string;
    backgroundDesktop: string;
    backgroundMobile: string;
    sections: HomeSectionT[];
  };
};

export type HomeSectionT = ProjectsSectionT | FullSectionT | QuoteSectionT | SimpleSectionT;

export type ProjectsSectionT = {
  type: "projects";
  titleLine: string[];
  text?: string;
};

export type FullSectionT = {
  type: "fullSection";
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
  titleLine: string[];
  text: string;
};

export type SectionPropsT = {
  data: HomeSectionT;
  singleProjectPage?: boolean;
  home?: boolean;
  quote?: boolean;
  isLast?: boolean;
};
