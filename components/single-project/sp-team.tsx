import { SimpleHeader } from "@/components/general/simple-header";

type SpTeamPropsT = {
  data: {
    type: "team";
    title: string;
    cards: { title: string; content: string }[];
  };
};

export const SpTeam = ({ data }: SpTeamPropsT) => {
  const { title, cards } = data;

  return (
    <div className={`fest-container`}>
      <SimpleHeader title={title} />
      <div className="grid gap-4 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="rounded-3xl border border-gray5 p-6">
            <p className="font-mono text-20 uppercase">{card.title}</p>
            <p className="pt-4 text-16 text-copy-body">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
