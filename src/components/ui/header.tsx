import { ArrowLeft, Map } from "lucide-react";
import React from "react";

interface HeaderProps {
    icon: React.ElementType,
    title: string,
}

export default function Header ({icon: Icon, title}: HeaderProps) {
    return (<div className="flex items-center justify-center gap-4">
        <button type="button" className="rounded-full p-3 border border-gray">
            <ArrowLeft />
        </button>

        <div className="flex items-center justify-center gap-2">
            <Map width={24} height={24} />
            <h1>Pontos de Coleta</h1>
        </div>
    </div>);
}