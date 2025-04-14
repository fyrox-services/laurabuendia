import lineaDirecta from "@/assets/jobs/linea-directa.jpeg";
import promede from "@/assets/jobs/promede-logo.jpeg";
import servicioSaludMadrid from "@/assets/jobs/servicio-salud-madrid.jpeg";
import type { Work } from "@/types";

export const works: Work[] = [
  {
    company: "linea directa aseguradora",
    date: {
      month: "diciembre",
      year: 2024,
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam quod quo blanditiis,",
    logo: lineaDirecta,
    job: "Valoradora del daño corporal de accidentes de tráfico",
  },
  {
    company: "promede",
    date: {
      month: "octubre",
      year: 2019,
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam quod quo blanditiis,",
    logo: promede,
    job: "perito médico y valoradora del daño corporal",
  },
  {
    company: "servicio madrileño de salud",
    date: {
      month: "noviembre",
      year: 2016,
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam quod quo blanditiis,",
    logo: servicioSaludMadrid,
    job: "PAL24. Urgencias telefónicas y atención continuada de cuidados paliativos de Madrid",
  },
];
