import particular from "@/assets/ilustrations/particular.png";
import abogado from "@/assets/ilustrations/abogado.png";
import aseguradora from "@/assets/ilustrations/aseguradora.png";
import gobierno from "@/assets/ilustrations/gobierno.png";
import type { Target } from "@/types";

export const targets: Target[] = [
  {
    title: "particulares",
    description:
      "Si has sufrido una negligencia médica, un accidente o necesitas reclamar daños, te ayudo a valorar tu caso, elaborar el informe necesario y acompañarte durante todo el proceso.",
    icon: particular,
  },
  {
    title: "abogados",
    description:
      "Facilito la defensa jurídica mediante informes claros, fundamentados y redactados con criterios médico-legales, además de ofrecer apoyo en la preparación del juicio y la ratificación pericil.",
    icon: abogado,
  },
  {
    title: "aseguradoras",
    description:
      "Realizo valoraciones objetivas del daño corporal, informes de seguimiento y peritaciones imparciales que permiten tomar decisiones con mayor precisión y respaldo técnico.",
    icon: aseguradora,
  },
  {
    title: "administraciones públicas",
    description:
      "Colaboro en procedimientos administrativos, laborales o judiciales que requieren una evaluación médica experta, aportando informes con validez legal y una visión clínica independiente.",
    icon: gobierno,
  },
];
