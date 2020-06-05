import react, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage('darkMode', initialValue);

  useEffect(() => {
    someValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
  }, [someValue]);

  return [someValue, setSomeValue];
};