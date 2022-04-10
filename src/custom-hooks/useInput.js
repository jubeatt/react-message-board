import { useState } from "react";

export function useInput(deault = "") {
  const [inputValue, setInputValue] = useState(deault);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return { inputValue, setInputValue, handleInput };
}
