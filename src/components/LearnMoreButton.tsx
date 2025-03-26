import * as React from "react";

interface LearnMoreButtonProps {
  theme?: "light" | "dark";
  textBtn?: string;
}

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  theme = "dark",
}) => {
  const iconSvg =
    theme === "dark"
      ? `<svg width="41" height="41" viewBox="0 0 41 41" fill="none"><circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"></circle><path d="M11.25 24.701C10.533 25.115 10.287 26.033 10.701 26.75C11.115 27.467 12.033 27.713 12.75 27.299L11.25 24.701ZM30.769 16.388C30.984 15.588 30.509 14.766 29.709 14.551L16.669 11.057C15.869 10.843 15.046 11.318 14.832 12.118C14.617 12.918 15.092 13.74 15.892 13.955L27.483 17.061L24.378 28.652C24.163 29.452 24.638 30.274 25.438 30.489C26.238 30.703 27.061 30.228 27.275 29.428L30.769 16.388ZM12.75 27.299L30.071 17.299L28.571 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"></path></svg>`
      : `<svg width="41" height="41" viewBox="0 0 41 41" fill="none"><circle cx="20.5" cy="20.5" r="20.5" fill="white"></circle><path d="M11.25 24.701C10.533 25.115 10.287 26.033 10.701 26.75C11.115 27.467 12.033 27.713 12.75 27.299L11.25 24.701ZM30.769 16.388C30.984 15.588 30.509 14.766 29.709 14.551L16.669 11.057C15.869 10.843 15.046 11.318 14.832 12.118C14.617 12.918 15.092 13.74 15.892 13.955L27.483 17.061L24.378 28.652C24.163 29.452 24.638 30.274 25.438 30.489C26.238 30.703 27.061 30.228 27.275 29.428L30.769 16.388ZM12.75 27.299L30.071 17.299L28.571 14.701L11.25 24.701L12.75 27.299Z" fill="black"></path></svg>`;

  return (
    <button className="flex gap-4 items-center text-xl">
      <div dangerouslySetInnerHTML={{ __html: iconSvg }} />
      <span className={`${theme === 'dark' ? 'text-black' : 'text-white'}`}>Learn more</span>
    </button>
  );
};
