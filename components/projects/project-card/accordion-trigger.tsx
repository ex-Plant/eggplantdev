import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ScrambleText } from "@/components/general/scramble-text";
import { GlowArrow } from "@/components/general/glow-arrow";
import { GlowWrapper } from "@/components/general/glow-wrapper";

type AccordionTriggerPropsT = {
  name: string;
  year: string | undefined;
  isOpen: boolean;
  hasUrl: boolean;
};

export function AccordionTrigger({ name, year, isOpen, hasUrl }: AccordionTriggerPropsT) {
  return (
    <Accordion.Trigger className="w-full cursor-pointer transition-transform duration-300 group-hover/card:translate-y-[-6px]">
      <GlowWrapper glowClassName="-inset-x-8 -inset-y-4 rounded-2xl">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-12">
          <div className="flex flex-col items-start">
            <ScrambleText className="text-24 font-mono uppercase" text={name} />
            {year && <p className="text-gray7 text-14 scalable pt-1">{year}</p>}
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
            className="self-center"
          >
            <GlowArrow inactive={!hasUrl} />
          </motion.div>
        </div>
      </GlowWrapper>
    </Accordion.Trigger>
  );
}
