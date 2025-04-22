import type { Service } from "@/types";
import informesViabilidad from "@/assets/ilustrations/informes-viabilidad.png";
import informesPericiales from "@/assets/ilustrations/informes-periciales.png";
import valorationDanoCorporal from "@/assets/ilustrations/valoracion-dano-corporal.png";

export const services: Service[] = [
  {
    name: "Valoración del daño corporal",
    phrase:
      "¿Has sufrido lesiones tras una intervención médica o un accidente?",
    description:
      "Elaboro informes médicos que cuantifican de forma objetiva tus lesiones, secuelas o perjuicios según el baremo legal vigente. Este documento puede ser clave para reclamaciones, negociaciones o procesos judiciales.",
    link: "/servicios/valoracion-dano-corporal",
    ilustration: informesViabilidad,
  },
  {
    name: "Informes periciales",
    phrase:
      "¿Necesitás demostrar que hubo una mala actuación médica?",
    description:
      "Elaboro informes periciales objetivos y detallados que analizan si las actuaciones médicas se ajustaron a la lex artis. Estos documentos pueden ser determinantes en juicios, reclamaciones o acuerdos extrajudiciales.",
    link: "/servicios/informes-periciales",
    ilustration: informesPericiales,
  },
  {
    name: "Accidentes de tráfico y del hogar",
    phrase:
      "¿Has sufrido un accidente y necesitás reclamar por tus lesiones?",
    description:
      "Elaboro informes periciales tras la exploración médica del lesionado y el análisis de toda la documentación del caso. Estos informes son clave para obtener una indemnización justa en procesos legales o negociaciones con aseguradoras.",
    link: "/servicios/accidentes-de-trafico-y-hogar",
    ilustration: valorationDanoCorporal,
  },
  {
    name: "Informes de viabilidad",
    phrase:
      "¿No sabés si tu caso tiene fundamento legal o médico?",
    description:
      "Analizo tu caso de forma preliminar y te doy una respuesta clara sobre si es viable iniciar una reclamación. Este informe ahorra tiempo, evita costes innecesarios y permite tomar decisiones con criterio profesional.",
    link: "/servicios/informes-viabilidad",
    ilustration: informesViabilidad,
  },
  {
    name: "Perdida de oportunidad",
    phrase:
      "¿Creés que un diagnóstico tardío empeoró tu salud?",
    description:
      "Cuando un retraso médico evita un tratamiento oportuno y agrava tu estado, puedes reclamar por pérdida de oportunidad. Elaboro informes que demuestran ese daño invisible, con base clínica y argumentos claros para tu defensa.",
    link: "/servicios/perdida-de-oportunidad",
    ilustration: informesViabilidad,
  },
  {
    name: "Reuniones con abogados",
    phrase:
      "¿Necesita preparar su estrategia con respaldo médico riguroso?",
    description:
      "Colaboro con letrados en la preparación del caso, aportando criterio médico en la elaboración de preguntas clave para la ratificación judicial. Estas reuniones permiten al abogado anticipar escenarios y reforzar la solidez del testimonio pericial.",
    link: "/servicios/reuniones-con-abogados",
    ilustration: informesViabilidad,
  },
  {
    name: "Mediación",
    phrase:
      "¿Busca resolver el conflicto sin llegar a juicio?",
    description:
      "Acompaño a los letrados en reuniones de mediación entre las partes, explicando con precisión los actos médicos implicados y su repercusión económica. Mi intervención permite facilitar acuerdos fundados en criterios técnicos y comprensibles para todos los implicados.",
    link: "/servicios/mediacion",
    ilustration: informesViabilidad,
  },
  {
    name: "Ratificaciones judiciales",
    phrase:
      "¿Necesita respaldo médico en juicio para defender su informe?",
    description:
      "Asisto a juicios para ratificar los informes periciales elaborados previamente y responder a las preguntas de las partes. Mi intervención ayuda a que el juez comprenda con precisión los hechos médicos y sus implicaciones en el caso.",
    link: "/servicios/ratificaciones-judiciales",
    ilustration: informesViabilidad,
  },
];
