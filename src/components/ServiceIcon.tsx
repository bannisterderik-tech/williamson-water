import {
  Droplets,
  Home,
  ShieldCheck,
  Mountain,
  Sun,
  FlaskConical,
  TestTube2,
  Filter,
  AlertOctagon,
  Building2,
  Coffee,
  Siren,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Droplets,
  Home,
  ShieldCheck,
  Mountain,
  Sun,
  FlaskConical,
  TestTube2,
  Filter,
  AlertOctagon,
  Building2,
  Coffee,
  Siren,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Droplets;
  return <Icon className={className} />;
}
