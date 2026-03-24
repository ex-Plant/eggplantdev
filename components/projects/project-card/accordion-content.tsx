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
        <Accordion.Content forceMount asChild>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pr-10 pb-12">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="text-16 text-lightgray text-balance"
              >
                {description}
              </motion.p>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="border-gray5 text-gray7 text-12 rounded-lg border px-3">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {url && (
                <GlowWrapper className={`w-fit`}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-14 text-lightgray relative transition-colors duration-300 hover:text-white"
                  >
                    {t("visitWebsite")}
                  </Link>
                </GlowWrapper>
              )}
            </div>
          </motion.div>
        </Accordion.Content>
      )}
    </AnimatePresence>
  );
}
