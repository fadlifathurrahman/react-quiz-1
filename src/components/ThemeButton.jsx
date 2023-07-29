import { useContext } from "react";
import { LangContext, ThemeContext } from "../App";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const stringsTheme = {
    id: {
      text: "Tema",
    },
    en: {
      text: "Theme",
    },
  };
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={
        theme === "dark"
          ? "bg-slate-700 rounded-full"
          : "bg-slate-700 rounded-full"
      }
    >
      <div className="flex flex-row gap-2 pl-6 items-center py-0 text-xs">
        {stringsTheme[lang].text}
        <div className="bg-slate-500 rounded-full p-2 -mr-2">
          {theme === "dark" ? (
            <MdLightMode size="16px" />
          ) : (
            <MdDarkMode size="16px" />
          )}
        </div>
      </div>
    </button>
  );
}
