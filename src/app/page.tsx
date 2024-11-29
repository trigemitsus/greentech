import NavHeader from "@/components/header";
import { Trophy } from "lucide-react";

export default function Home() {
  return (
    <NavHeader
      label="Placar nacional"
      icon={<Trophy className="h-[1.5em] w-[1.5em]" />}
      href="/register"
    />
  );
}
