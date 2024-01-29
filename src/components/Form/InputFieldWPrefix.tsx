import React from "react";

type TInputFieldWPrefix = {
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  err?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputFieldWPrefix = ({
  type,
  name,
  placeholder,
  value,
  err = "",
  onChange,
}: TInputFieldWPrefix) => {
  return (
    <>
      <div className="w-full relative">
        <p className="absolute left-5 top-[17px] text-lg">Rp</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`text-black px-12 input input-bordered w-full max-w-full h-16 text-lg ${
            err != "" ? "input-error" : ""
          }`}
          onChange={onChange}
          value={value}
        />
        <p className="text-red-500 absolute -bottom-7 text-xs">{err}</p>
      </div>
    </>
  );
};

export default InputFieldWPrefix;
