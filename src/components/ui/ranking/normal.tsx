interface RankingNormalProps {
    position: number,
    nickname: string,
    ponts: number,
}

export default function RankingNormal({position, nickname, ponts}: RankingNormalProps) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg border border-black/25">
            <div className="w-6 h-6 rounded-full bg-muted-foreground flex justify-center items-center p-3">
                <span className="text-sm font-semibold text-primary">{position}</span>
            </div>
            <div className="w-full flex justify-between items-center font-semibold">
                <p>{nickname}</p>
                <p>{ponts}pts</p>
            </div>
        </div>
    );
}