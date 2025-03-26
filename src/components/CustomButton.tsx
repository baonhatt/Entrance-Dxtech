import React from "react";

interface CustomButtonProps {
  title?: string;
  bgColor?: string;
  text?: string;
  border?: string; 
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  bgColor,
  text,
  border,
  width,
  height,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${bgColor} ${text} ${border} ${width} ${height} h-[68px] cursor-pointer rounded-xl
       transition-colors`}
    >
      {title}
    </button>
  );
};
