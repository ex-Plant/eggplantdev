"use client";

import Link from "next/link";
import { Underline } from "@/components/general/underline/underline";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export default function NotFound() {
  const { t } = useTranslation("nav");

  return (
    <div className={`fest-container text-20 flex h-[50vh] items-center justify-center`}>
      <div className={`flex flex-col items-center justify-center space-y-4`}>
        <h2>{t("pageNotFound")}</h2>
        <div className={`group relative`}>
          <Link href="/">{t("returnHome")}</Link>
          <Underline />
        </div>
      </div>
    </div>
  );
}
