export const siteName = "Laura Buendía - Perito Médico";
const BASE_URL_WS = "https://wa.me/658217820?text=";
const buildMsg = (msg: string) => {
  return `${BASE_URL_WS}${encodeURI(msg)}`;
};

export const GLOBAL_DATA = {
  PHONE_NUMBER: "658217820",
  CALL_LINK: "tel:658217820",
  PHONE_MASK: "658 217 820",
  MAIL_TO: "mailto:info@lauraperitomedico.com",
  LINKEDIN: "https://www.linkedin.com/in/laura-buend%C3%ADa-8a1b86197/",
};

export const WHATSAPP_MSG = {
  GENERAL: buildMsg("Hola, me gustaría tener más información sobre: "),
};
