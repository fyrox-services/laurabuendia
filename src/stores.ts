import { atom } from "nanostores";

export const isMenuMobileOpen = atom(false);
export const handleMenuMobile = {
  set: (state: boolean) => isMenuMobileOpen.set(!state),
};

export const isAboveModalOpen = atom(false);
export const handleAboveModal = {
  open: () => isAboveModalOpen.set(true),
  close: () => isAboveModalOpen.set(false),
};
