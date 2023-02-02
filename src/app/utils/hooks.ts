import { useState, MouseEventHandler } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useClipboardWithAlert = () => {
  const [isOpen, setOpenStatus] = useState(false);

  const copyToClipboard: MouseEventHandler<HTMLParagraphElement> = (e) => {
    const value = e.currentTarget.textContent;
    if (value) {
      navigator.clipboard.writeText(value);

      setOpenStatus(true);

      setTimeout(() => {
        setOpenStatus(false);
      }, 3000);
    }
  };

  return { isOpen, copyToClipboard };
};

export const useAlert = (delay: number) => {
  const [isOpen, setOpenStatus] = useState(false);

  const showAlert = () => {
    setOpenStatus(true);

    setTimeout(() => {
      setOpenStatus(false);
    }, delay);
  };

  return { isOpen, showAlert };
};
