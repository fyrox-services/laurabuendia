import { isMenuMobileOpen } from "@/stores";
import { useStore } from "@nanostores/preact";
import css from "@/styles/components/HeaderNavbar.module.css";

export function HeaderNavbar() {
  const $isMenuMobileOpen = useStore(isMenuMobileOpen);

  return (
    <nav class={`${css.Nav} ${$isMenuMobileOpen ? css.active : ""}`}>
      <ul class={css.Wrap}>
        <li>
          <a href="/">informes</a>
        </li>
        <li>
          <a href="/">valoraciones</a>
        </li>
        <li>
          <a href="/">asistencia</a>
        </li>
        <li>
          <a href="/blog">blog</a>
        </li>
        <li>
          <a href="/">contacto</a>
        </li>
      </ul>
    </nav>
  );
}
