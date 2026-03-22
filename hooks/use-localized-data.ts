"use client";

import { useI18nContext } from "@/lib/i18n/translations-provider";

import homeEn from "@/data/home.en.json";
import homePl from "@/data/home.pl.json";
import projectsEn from "@/data/projects.en.json";
import projectsPl from "@/data/projects.pl.json";

import type { HomePagePropsT } from "@/types/home-page-types";
import type { ProjectT } from "@/types/projects-types";

type DataMapT = {
  home: HomePagePropsT["data"];
  projects: { projects: ProjectT[] };
};

const DATA: { [K in keyof DataMapT]: { en: DataMapT[K]; pl: DataMapT[K] } } = {
  home: { en: homeEn as DataMapT["home"], pl: homePl as DataMapT["home"] },
  projects: { en: projectsEn as DataMapT["projects"], pl: projectsPl as DataMapT["projects"] },
};

export function useLocalizedData<K extends keyof DataMapT>(name: K): DataMapT[K] {
  const { locale } = useI18nContext();
  return DATA[name][locale];
}
