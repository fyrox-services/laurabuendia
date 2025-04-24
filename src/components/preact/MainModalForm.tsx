import css from "@/styles/components/MainModalForm.module.css";
import { handleMainModalForm, isMainModalForm } from "@/stores";
// import { useStore } from "@nanostores/preact";
import { MainForm } from "@/components/preact/MainForm";
import { useStore } from "@nanostores/react";

export function MainModalForm() {
  const $isMainModalForm = useStore(isMainModalForm);

  return (
    <>
      {$isMainModalForm && (
        <div className={`${css.Modal} fade`}>
          <div className={`${css.ModalWrap} move-up`}>
            <button onClick={handleMainModalForm.close} className={css.Close}>
              cerrar
            </button>
            <MainForm />
          </div>
        </div>
      )}
    </>
  );
}
