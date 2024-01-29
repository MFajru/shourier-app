import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  variants?:
    | "primary"
    | "primaryBig"
    | "secondary"
    | "secondaryBig"
    | "primarySmall"
    | "primaryBorderedTextSm"
    | "bordered"
    | "borderedWarning"
    | "logout"
    | "active"
    | "error"
    | "borderedError"
    | "";
  textSize?: "normal" | "medium";
}

export const Button = ({
  type = "button",
  children,
  variants = "",
  textSize = "normal",
  ...props
}: IButton) => {
  let variantStyle = "";
  switch (variants) {
    case "primary":
      variantStyle = "text-white btn-primary";
      break;
    case "secondary":
      variantStyle = "btn-outline btn-primary";
      break;
    case "secondaryBig":
      variantStyle = "btn-outline btn-primary btn-lg";
      break;
    case "primaryBig":
      variantStyle = "text-white btn-primary btn-lg";
      break;
    case "error":
      variantStyle = "text-white btn-error";
      break;
    case "borderedError":
      variantStyle = "text-white btn-outline btn-error";
      break;
    case "primarySmall":
      variantStyle = "text-white btn-primary btn-sm";
      break;
    case "primaryBorderedTextSm":
      variantStyle =
        "border border-primary border-solid text-primary text-sm drop-shadow-sm bg-white btn-sm";
      break;
    case "logout":
      variantStyle = "text-red-500 text-base";
      break;
    case "bordered":
      variantStyle = "border border-black text-black text-sm";
      break;
    case "borderedWarning":
      variantStyle = "btn-outline btn-warning";
      break;
    case "active":
      variantStyle = "text-white bg-primary";
  }

  switch (textSize) {
    case "medium":
      variantStyle += " text-base";
      break;
  }
  return (
    <button type={type} {...props} className={`btn w-full ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;
