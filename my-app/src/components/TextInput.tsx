// TextInput.tsx
import React from "react";
import '../App.css';

interface TextInputProps {
  type: string;
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-1">
      <label className="form-label labelFont" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
