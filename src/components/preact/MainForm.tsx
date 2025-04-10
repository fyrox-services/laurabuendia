import css from "@/styles/components/MainForm.module.css";

interface Props {
  modifier?: string;
}

export function MainForm({ modifier = "" }: Props) {
  return (
    <form class={`${css.Form} ${css[modifier]}`}>
      <h2 class="text-gradient-primary">
        rellena los campos y me pondré en contacto contigo
      </h2>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          nombre
        </label>
        <input class={css.Input} type="text" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          email
        </label>
        <input class={css.Input} type="text" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          teléfono
        </label>
        <input class={css.Input} type="text" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          asunto
        </label>
        <select class={css.Select} name="" id="">
          <option value="">informe pericial</option>
          <option value="">valoración de daño corporal</option>
          <option value="">informe de orientación</option>
          <option value="">asistencia</option>
        </select>
      </div>
      <div class={`${css.Field} ${css.TextareaField}`}>
        <label class={css.Label} htmlFor="">
          mensaje
        </label>
        <textarea class={css.Textarea} name="" id=""></textarea>
      </div>
      <button class={`${css.Submit} btn`}>enviar</button>
    </form>
  );
}
