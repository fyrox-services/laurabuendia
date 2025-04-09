import { handleMainModalForm } from "@/stores";
import css from "@/styles/components/Buttons.module.css";

interface Props {
  children: string;
}

export function MainCTA({ children = "contactar" }: Props) {
  return (
    <button onClick={handleMainModalForm.open} class={css.Btn}>
      {children}
    </button>
  );
}
