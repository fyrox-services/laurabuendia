import particular from "@/assets/ilustrations/particular.webp";
import abogado from "@/assets/ilustrations/abogado.webp";
import aseguradora from "@/assets/ilustrations/aseguradora.webp";
import gobierno from "@/assets/ilustrations/gobierno.webp";
import type { Target } from "@/types";

export const targets: Target[] = [
  {
    title: "particulares",
    description:
      "Si ha sufrido una negligencia médica, un accidente o necesita reclamar daños, le ayudo a valorar su caso, elaborar el informe necesario y acompañarle durante todo el proceso.",
    icon: particular,
  },
  {
    title: "letrados",
    description:
      "Facilito la defensa jurídica mediante informes claros, fundamentados y redactados con criterios médico-legales actuales, además de ofrecer apoyo y asesoramiento en la preparación del juicio y la ratificación pericial.",
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
