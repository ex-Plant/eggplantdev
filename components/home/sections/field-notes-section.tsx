import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { AsymmetricGridNotes } from "./field-notes-propositions/asymmetric-grid-notes";
import { StackedRowsNotes } from "./field-notes-propositions/stacked-rows-notes";
import { SignalBoardNotes } from "./field-notes-propositions/signal-board-notes";
import { TimelineNotes } from "./field-notes-propositions/timeline-notes";
import { NumberedMosaicNotes } from "./field-notes-propositions/numbered-mosaic-notes";
import { OrbitalClusterNotes } from "./field-notes-propositions/orbital-cluster-notes";
import { BrutalistPosterNotes } from "./field-notes-propositions/brutalist-poster-notes";
import { ConstellationMapNotes } from "./field-notes-propositions/constellation-map-notes";
import { SplitLedgerNotes } from "./field-notes-propositions/split-ledger-notes";
import { MagneticCardsNotes } from "./field-notes-propositions/magnetic-cards-notes";

type FieldNotesSectionPropsT = {
  data: FieldNotesSectionT;
  className?: string;
};

export const FieldNotesSection = ({ data, className }: FieldNotesSectionPropsT) => {
  switch (data.variant) {
    case "asymmetricGrid":
      return <AsymmetricGridNotes data={data} className={cn("", className)} />;
    case "stackedRows":
      return <StackedRowsNotes data={data} className={cn("", className)} />;
    case "signalBoard":
      return <SignalBoardNotes data={data} className={cn("", className)} />;
    case "timeline":
      return <TimelineNotes data={data} className={cn("", className)} />;
    case "numberedMosaic":
      return <NumberedMosaicNotes data={data} className={cn("", className)} />;
    case "orbitalCluster":
      return <OrbitalClusterNotes data={data} className={cn("", className)} />;
    case "brutalistPoster":
      return <BrutalistPosterNotes data={data} className={cn("", className)} />;
    case "constellationMap":
      return <ConstellationMapNotes data={data} className={cn("", className)} />;
    case "splitLedger":
      return <SplitLedgerNotes data={data} className={cn("", className)} />;
    case "magneticCards":
      return <MagneticCardsNotes data={data} className={cn("", className)} />;
  }
};
