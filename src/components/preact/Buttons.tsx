import { handleMainModalForm } from "@/stores";
import css from "@/styles/components/Buttons.module.css";

interface Props {
  children: string;
  modifier?: string;
}

export function MainCTA({ children = "contactar", modifier = "" }: Props) {
  return (
    <button
      onClick={handleMainModalForm.open}
      class={`${css.Btn} ${css[modifier]}`}
    >
      {children}
    </button>
  );
}
