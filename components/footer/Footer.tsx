"use client";

import { FooterForm } from "@/components/footer/footer-form";
import { ScrambleText } from "@/components/general/scramble-text";
import { AccessibilityMenu } from "@/components/accessibility/accessibility-menu";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export const Footer = () => {
  const { t } = useTranslation("footer");
  const sloganLines = [t("sloganLine1"), t("sloganLine2"), t("sloganLine3")];

  return (
    <footer className="relative z-100 mt-auto flex w-full bg-white pb-10 text-black">
      <div className="fest-container">
        <div className="flex flex-col">
          <header className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-40">
            <h2 className="lg:text-80 text-48 md:text-64 xl:text-96 py-20 font-mono uppercase lg:py-40">
              {sloganLines.map((line, index) => (
                <ScrambleText key={index} text={line} />
              ))}
            </h2>
            <FooterForm className={`lg:self-center lg:py-40`} />
          </header>
        </div>
      </div>
    </footer>
  );
};
3;
