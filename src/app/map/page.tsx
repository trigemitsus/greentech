import { ArrowLeft, ChevronRight, MapPin, Map } from "lucide-react";

export default function MapPage() {
    return (
        <main>
            <div className="flex items-center justify-center gap-4">
                <button type="button" className="rounded-full p-3 border border-gray">
                    <ArrowLeft />
                </button>

                <div className="flex items-center justify-center gap-2">
                    <Map />
                    <h1>Pontos de Coleta</h1>
                </div>
            </div>

            <div className="flex gap-2 items-center justify-center">
                <MapPin width={16} height={16} />
                <h2 className="text-sm font-normal font-sans leading-5">Foz do Iguaçu</h2>
            </div>
        </main>
    );
} 