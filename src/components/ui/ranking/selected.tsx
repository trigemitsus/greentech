interface RankingSelectedProps {
    position: number,
    nickname: string,
    ponts: number,
}

export default function RankingSelected({position, nickname, ponts}: RankingSelectedProps) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg border border-[#501A96] bg-[#9747FF]">
            <div className="w-6 h-6 rounded-full bg-muted-foreground flex justify-center items-center p-3 bg-[#501A96]">
                <span className="text-sm font-semibold text-primary-foreground">{position}</span>
            </div>
            <div className="w-full flex justify-between items-center text-primary-foreground font-semibold">
                <p>{nickname}</p>
                <p>{ponts}pts</p>
            </div>
        </div>
    );
}