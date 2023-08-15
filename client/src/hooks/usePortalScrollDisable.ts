import { useEffect } from "react";

export const usePortalScrollDisable = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return null;
};
