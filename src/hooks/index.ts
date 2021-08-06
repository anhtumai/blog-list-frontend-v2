import { useState, useEffect } from "react";
import React from "react";

export const useInputField = () => {
  const [value, setValue] = useState("");

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return {
    value,
    onChange,
  };
};
