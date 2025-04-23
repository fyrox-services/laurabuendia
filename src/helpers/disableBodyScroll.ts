import { isMenuMobileOpen, isMainModalForm } from "@/stores";

export function disableBodyScroll() {
  const { body } = document;

  isMenuMobileOpen.subscribe((isOpen) => {
    body.classList.toggle("not-scrollable", isOpen);
  });

  isMainModalForm.subscribe((isOpen) => {
    body.classList.toggle("not-scrollable", isOpen);
  });
}
