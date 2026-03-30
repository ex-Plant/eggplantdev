"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { EggplantsInSpace } from "@/components/home/heroes/eggplants-in-space/eggplants-in-space";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ error: _error, reset: _reset }: { error: Error; reset: () => void }) {
  const { t } = useTranslation("form");
  const { t: tNav } = useTranslation("nav");

  return (
    <div className="bg-bgc text-primary relative min-h-svh">
      <EggplantsInSpace />
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end pb-20">
        <p className="text-gold-caption mb-4 text-lg">{t("errorTitle")}</p>
        <Button variant="heroHotPinkPrimary" size="hero" asChild>
          <Link href="/">{tNav("returnHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
