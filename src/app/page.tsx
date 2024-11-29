import NavHeader from "@/components/nav-header";
import Ranking from "@/components/ui/ranking";
import { Trophy } from "lucide-react";

export default function RankingPage() {
  return (
    <main className="flex flex-col min-h-screen gap-4 p-6">
      <NavHeader
        label="Placar nacional"
        icon={<Trophy className="h-[1.5em] w-[1.5em]" />}
        href="/register"
      />

      {
        Array.from({
          length: 10
        }).map((_, index) => {

          const position = index + 1;
          const ponts = 10000 - ((index) * 1000);
          const nickname = '[nickname]';

          if (index + 1 == 1) {
            return (
              <Ranking.Selected key={index} position={position} nickname={nickname} ponts={ponts} />
            );
          }

          return (
            <Ranking.Normal key={index} position={position} nickname={nickname} ponts={ponts} />
          );
        }
        )
      }

    </main>
  );
}
