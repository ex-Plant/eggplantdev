"use client";

import { useEffect, useState } from "react";
import { ScrambleText } from "@/components/general/scramble-text";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

type ConfirmOverlayPropsT = {
  submitMessage: string;
  setSubmitMessage: (message: string) => void;
};

export function ConfirmOverlay({ submitMessage, setSubmitMessage }: ConfirmOverlayPropsT) {
  const isOpen = submitMessage !== "";
  const [showHint, setShowHint] = useState(false);
  const { t } = useTranslation("form");

  useEffect(() => {
    if (!isOpen) return;

    const hintTimer = setTimeout(() => setShowHint(true), 3000);
    const autoClose = setTimeout(() => setSubmitMessage(""), 10000);
    return () => {
      setShowHint(false);
      clearTimeout(hintTimer);
      clearTimeout(autoClose);
    };
  }, [isOpen, setSubmitMessage]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setSubmitMessage("")}>
      <DialogContent className="flex h-dvh w-dvw max-w-none items-center justify-center bg-black">
        <div className="grit-dense pointer-events-none absolute inset-0" />
        <DialogTitle className="sr-only">{t("confirmTitle")}</DialogTitle>
        <div className="relative flex flex-col items-center gap-8">
          <DialogDescription asChild>
            <p className="text-20 md:text-28 max-w-2xl px-4 text-center font-mono text-white uppercase">
              <ScrambleText text={t("thankYou")} triggerOnMount />
              <ScrambleText text={t("willGetBack")} triggerOnMount />
            </p>
          </DialogDescription>
          <p className={`text-12 text-gray7 transition-opacity duration-500 ${showHint ? "opacity-100" : "opacity-0"}`}>
            {t("clickToClose")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
