import css from "@/styles/components/MainForm.module.css";
import { useForm } from "@modular-forms/preact";
import { mainFormSchema, type MainForm } from "@/schemas";

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
  const [form, Form] = useForm<MainForm>();

  return (
    <form class={`${css.Form} ${css[modifier]}`}>
      <h2 class="text-gradient-primary">
        rellena los campos y me pondré en contacto contigo
      </h2>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="name">
          nombre
        </label>
        <input class={css.Input} id="name" type="text" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="email">
          email
        </label>
        <input id="email" class={css.Input} type="email" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="phone">
          teléfono
        </label>
        <input id="phone" class={css.Input} type="tel" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="subject">
          asunto
        </label>
        <select class={css.Select} name="subject" id="subject">
          {services.map((service) => (
            <option value={service.text}>{service.text}</option>
          ))}
        </select>
      </div>
      <div class={`${css.Field} ${css.TextareaField}`}>
        <label class={css.Label} htmlFor="">
          mensaje
        </label>
        <textarea class={css.Textarea} name="" id=""></textarea>
      </div>
      <div>
        <label class={`${css.Label} ${css.LabelLegal}`} htmlFor="">
          <input type="checkbox" />
          <span>Acepto la política de privacidad</span>
        </label>
      </div>
      <button class={`${css.Submit} btn`}>enviar</button>
    </form>
  );
}
