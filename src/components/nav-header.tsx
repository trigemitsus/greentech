import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NavHeader({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Link href={href}>
        <Button variant="outline" size="icon" className="rounded-full">
          <ChevronLeft />
        </Button>
      </Link>

      <div className="flex gap-2 text-xl">
        {icon}

        <p className="font-semibold">{label}</p>
      </div>
    </div>
  );
}
