import css from "@/styles/components/MainForm.module.css";
// import { mainFormSchema, type MainForm } from "@/schemas";

interface Props {
  modifier?: string;
}

const services = [
  { text: "Valoración del daño corporal" },
  { text: "Informes periciales" },
  { text: "Accidentes de tráfico y hogar" },
  { text: "Informes de viabilidad" },
  { text: "Perdida de oportunidad" },
  { text: "Asesoramiento a letrados" },
  { text: "Mediación" },
  { text: "Ratificaciones judiciales" },
];

export function MainForm({ modifier = "" }: Props) {
  return (
    <form className={`${css.Form} ${css[modifier]}`}>
      <h2 className="text-gradient-primary">
        rellena los campos y me pondré en contacto contigo
      </h2>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="name">
          nombre
        </label>
        <input className={css.Input} id="name" type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="email">
          email
        </label>
        <input id="email" className={css.Input} type="email" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="phone">
          teléfono
        </label>
        <input id="phone" className={css.Input} type="tel" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="subject">
          asunto
        </label>
        <select className={css.Select} name="subject" id="subject">
          {services.map((service) => (
            <option key={service.text} value={service.text}>
              {service.text}
            </option>
          ))}
        </select>
      </div>
      <div className={`${css.Field} ${css.TextareaField}`}>
        <label className={css.Label} htmlFor="">
          mensaje
        </label>
        <textarea className={css.Textarea} name="" id=""></textarea>
      </div>
      <div>
        <label className={`${css.Label} ${css.LabelLegal}`} htmlFor="">
          <input type="checkbox" />
          <span>Acepto la política de privacidad</span>
        </label>
      </div>
      <button className={`${css.Submit} btn`}>enviar</button>
    </form>
  );
}
