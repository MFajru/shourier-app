import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

type TInputField = {
  type: string;
  name: string;
  placeholder?: string;
  value: string | number;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  err?: string;
  disabled?: boolean;
  variants?: "medium" | "small" | "large";
  page?: "promo";
  showEye?: boolean;
  isPassword?: boolean;
};

export const InputField = ({
  page,
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  err = "",
  disabled = false,
  variants = "medium",
  showEye = true,
  isPassword = false,
}: TInputField) => {
  const [showPassword, setShowPassword] = useState(false);
  const innerType = showPassword ? "text" : "password";

  return (
    <label className="form-control w-full max-w-full relative">
      <div className="label">
        <span
          className={`label-text ${variants === "large" ? "text-base" : ""}`}
        >
          {label}
        </span>
      </div>
      <input
        type={
          isPassword && disabled
            ? "password"
            : type === "password"
            ? innerType
            : type
        }
        name={name}
        placeholder={placeholder}
        className={`text-black input input-bordered w-full max-w-full ${
          variants === "medium"
            ? "input-md"
            : variants === "large"
            ? "input-lg"
            : "input-sm"
        } ${err != "" ? "input-error" : ""} ${
          disabled ? "!text-black !bg-gray-100" : ""
        }`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {showEye && (
        <button
          type="button"
          className={`absolute w-5 h-5 right-4 top-[50px] ${
            type !== "password" ? "hidden" : ""
          }`}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeIcon className="text-gray-500" />
          ) : (
            <EyeSlashIcon className="text-gray-500" />
          )}
        </button>
      )}

      {page === "promo" && (
        <div className="label absolute -bottom-7">
          <span className="label-text-alt text-red-500">{err}</span>
        </div>
      )}
      {page != "promo" && (
        <div className="label">
          <span className="label-text-alt text-red-500">{err}</span>
        </div>
      )}
    </label>
  );
};
