import React from "react";
import PropTypes from "prop-types";

interface IInputWithLabelProps {
  htmlFor: string;
  value: string;
  children: React.ReactNode;
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputWithLabel = ({
  htmlFor,
  children,
  value,
  onInputChange,
}: IInputWithLabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input id={htmlFor} type="text" value={value} onChange={onInputChange} />
    </>
  );
};

InputWithLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
