import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GlowWrapper } from "@/components/general/glow-wrapper";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

type AccordionContentPropsT = {
  isOpen: boolean;
  description: string;
  tags: string[];
  url: string | undefined;
};

export function AccordionContentPanel({ isOpen, description, tags, url }: AccordionContentPropsT) {
  const { t } = useTranslation("projects");

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <Accordion.Content forceMount asChild className={`overflow-visible`}>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden"
          >
            <div className="scalable grid gap-6 py-12 pr-10">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="text-16 text-hero-title-secondary text-balance"
              >
                {description}
              </motion.p>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-gold-caption/40 text-16 text-gold-caption/40 rounded-lg border px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {url && (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-16 text-hero-title-secondary hover:text-copy-strong relative w-fit transition-colors duration-300"
                >
                  <GlowWrapper className={`-inset-x-5 -inset-y-3`}>{t("visitWebsite")}</GlowWrapper>
                </Link>
              )}
            </div>
          </motion.div>
        </Accordion.Content>
      )}
    </AnimatePresence>
  );
}
