import css from "@/styles/components/MainModalForm.module.css";
import { handleMainModalForm, isMainModalForm } from "@/stores";
import { useStore } from "@nanostores/preact";

export function MainModalForm() {
  const $isMainModalForm = useStore(isMainModalForm);

  return (
    <>
      {$isMainModalForm && (
        <div class={`${css.Modal} fade`}>
          <div class={`${css.ModalWrap} move-up`}>
            <button onClick={handleMainModalForm.close} class={css.Close}>
              cerrar
            </button>
            <form class={css.Form}>
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
          </div>
        </div>
      )}
    </>
  );
}
