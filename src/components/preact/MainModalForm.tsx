import css from "@/styles/components/MainModalForm.module.css";
import { handleMainModalForm, isMainModalForm } from "@/stores";
import { useStore } from "@nanostores/preact";
import { MainForm } from "@/components/preact/MainForm";

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
            <MainForm />
          </div>
        </div>
      )}
    </>
  );
}
