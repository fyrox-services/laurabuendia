import { atom } from "nanostores";

export const isMenuMobileOpen = atom(false);
export const handleMenuMobile = {
  set: (state: boolean) => isMenuMobileOpen.set(!state),
};

export const isMainModalForm = atom(false);
export const handleMainModalForm = {
  open: () => isMainModalForm.set(true),
  close: () => isMainModalForm.set(false),
};

export const isTocOpen = atom(false)
