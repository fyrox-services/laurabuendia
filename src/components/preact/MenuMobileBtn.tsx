import css from "@/styles/components/MenuMobileBtn.module.css";
import { handleMenuMobile, isMenuMobileOpen } from "@/stores";
import { useStore } from "@nanostores/preact";

export function MenuMobileBtn() {
  const $isMenuMobileOpen = useStore(isMenuMobileOpen);

  return (
    <button
      onClick={() => handleMenuMobile.set($isMenuMobileOpen)}
      class={`${css.Button} ${$isMenuMobileOpen ? css.active : ""}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
