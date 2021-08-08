import { useState } from "react";
import React from "react";

export const useInputField = () => {
  const [value, setValue] = useState("");

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
  };
};
