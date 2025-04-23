import css from "@/styles/components/PostForm.module.css";

interface Props {
  heading: string;
}

export function PostForm({ heading }: Props) {
  return (
    <form class={css.Form}>
      <h2 class="text-gradient-primary">{heading}</h2>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          nombre
        </label>
        <input class={css.Input} type="text" />
      </div>
      <div class={css.Field}>
        <label class={css.Label} htmlFor="">
          teléfono
        </label>
        <input class={css.Input} type="text" />
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
