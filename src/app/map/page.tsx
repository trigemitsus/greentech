import Header from "@/components/ui/header";
import {MapPin } from "lucide-react";

export default function MapPage() {
    return (
        <main>
            <Header />

            <div className="flex gap-2 items-center justify-center">
                <MapPin width={16} height={16} />
                <h2 className="text-sm font-normal font-sans leading-5">Foz do Iguaçu</h2>
            </div>
        </main>
    );
} 