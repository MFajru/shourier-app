import React from "react";

interface TSelectField extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  err?: string;
  options: string[];
  variants?: "medium" | "small";
}

const SelectField = ({
  id,
  name,
  placeholder = "Pick one...",
  label,
  value: defaultValue,
  err,
  variants,
  options,
  onChange,
  ...props
}: TSelectField): JSX.Element => {
  return (
    <label className="form-control w-full max-w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={defaultValue}
        className={`select select-bordered ${
          variants === "small" ? "select-sm" : ""
        } ${err === "" ? "" : "border-red-500"}`}
        {...props}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <div className="label">
        <span className="label-text-alt text-red-500">{err}</span>
      </div>
    </label>
  );
};

export default SelectField;
