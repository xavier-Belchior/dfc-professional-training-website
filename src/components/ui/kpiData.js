import { Building2, ShieldCheck, Clock3 } from "lucide-react";

export const kpiData = [
  {
    id: 1,
    title: "Empresas atendidas",
    value: 120,
    prefix: "+",
    icon: Building2,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
  },

  {
    id: 2,
    title: "Precisão Fiscal",
    value: 98,
    suffix: "%",
    icon: ShieldCheck,
    bgColor: "bg-green-100",
    iconColor: "text-green-700",
  },

  {
    id: 3,
    title: "Resposta Estratégica",
    value: 24,
    suffix: "h",
    icon: Clock3,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-700",
  },
];
