"use client";

import { useEffect, useState } from "react";
import { ScrambleText } from "@/components/general/scramble-text";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

type ConfirmOverlayPropsT = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConfirmOverlay({ isOpen, onClose }: ConfirmOverlayPropsT) {
  const [showHint, setShowHint] = useState(false);
  const { t } = useTranslation("form");

  useEffect(() => {
    if (!isOpen) return;

    const hintTimer = setTimeout(() => setShowHint(true), 3000);
    const autoClose = setTimeout(onClose, 10000);
    return () => {
      setShowHint(false);
      clearTimeout(hintTimer);
      clearTimeout(autoClose);
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex h-dvh w-dvw max-w-none cursor-pointer items-center justify-center bg-black"
        onClick={onClose}
      >
        <div className="grit-dense pointer-events-none absolute inset-0" />
        <DialogTitle className="sr-only">{t("confirmTitle")}</DialogTitle>
        <div className="relative flex flex-col items-center gap-8">
          <p className="text-20 md:text-28 max-w-2xl text-center font-mono text-white uppercase">
            <ScrambleText text={t("thankYou")} triggerOnMount />
            <ScrambleText text={t("willGetBack")} triggerOnMount />
          </p>
          <p className={`text-16 text-gray7 transition-opacity duration-500 ${showHint ? "opacity-100" : "opacity-0"}`}>
            {t("clickToClose")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
