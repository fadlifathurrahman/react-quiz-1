import { DiCode } from "react-icons/di";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";

export default function Header() {
  return (
    <header
      className="max-w-screen h-16 bg-slate-800 text-white 
    flex flex-row items-center justify-between
    px-8 top-0 sticky"
    >
      <div
        className="text-sm font-mono flex flex-row items-center content-center
      sm:text-md
      md:text-lg
      lg:text-2xl"
      >
        f<DiCode size="28" className="lg:text-2xl" />
        dli.ft
      </div>
      <ThemeButton />
      <LanguageButton />
    </header>
  );
}
