import React from 'react';

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, style, variant = "primary" }) => {
  return (
    <button className={`${variant === "primary" ? "bg-primary text-white" : "bg-neutral text-primary"} h-[32px] p-2 text-xs cursor-pointer rounded-md uppercase flex items-center justify-center`} onClick={onClick} disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export default Button;
