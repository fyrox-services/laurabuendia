import css from "@/styles/components/ContactForm.module.css";

interface Props {
  heading: string;
}

export function ContactForm({ heading }: Props) {
  return (
    <form className={css.Form}>
      <h2 className="text-gradient-primary">{heading}</h2>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="">
          nombre
        </label>
        <input className={css.Input} type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="">
          email
        </label>
        <input className={css.Input} type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="">
          teléfono
        </label>
        <input className={css.Input} type="text" />
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
