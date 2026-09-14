type Suit = "spade" | "heart" | "diamond" | "club";

const suitSymbol: Record<Suit, string> = {
  spade: "♠",
  heart: "♥",
  diamond: "♦",
  club: "♣",
};

type PlayingCardProps = {
  rank: string;
  suit: Suit;
  className?: string;
  faceDown?: boolean;
};

export function PlayingCard({
  rank,
  suit,
  className = "",
  faceDown = false,
}: PlayingCardProps) {
  const red = suit === "heart" || suit === "diamond";

  if (faceDown) {
    return (
      <div
        className={`relative flex h-28 w-20 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-nebula-800 to-nebula-950 shadow-2xl ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-2 rounded-lg border border-gold/20 bg-[repeating-linear-gradient(45deg,rgba(232,197,71,0.08)_0px,rgba(232,197,71,0.08)_2px,transparent_2px,transparent_8px)]" />
        <span className="font-display text-xs uppercase tracking-[0.3em] text-gold/40">
          GCG
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-28 w-20 shrink-0 flex-col justify-between rounded-xl border border-white/30 bg-gradient-to-br from-white to-zinc-200 p-2 shadow-2xl ${className}`}
      aria-hidden="true"
    >
      <span
        className={`font-display text-sm font-bold leading-none ${red ? "text-red-600" : "text-zinc-900"}`}
      >
        {rank}
        <span className="block text-xs">{suitSymbol[suit]}</span>
      </span>
      <span
        className={`self-center text-2xl ${red ? "text-red-600" : "text-zinc-900"}`}
      >
        {suitSymbol[suit]}
      </span>
      <span
        className={`self-end rotate-180 font-display text-sm font-bold leading-none ${red ? "text-red-600" : "text-zinc-900"}`}
      >
        {rank}
        <span className="block text-xs">{suitSymbol[suit]}</span>
      </span>
    </div>
  );
}
