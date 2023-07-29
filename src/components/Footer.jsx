import { useContext } from "react";
import { LangContext } from "../App";

export default function Footer() {
  const { lang } = useContext(LangContext);
  const stringsFooter = {
    id: {
      text: "Tugas Pelatihan React",
    },
    en: {
      text: "React Training Task",
    },
  };

  return (
    <footer
      className="flex max-w-screen items-center justify-center h-8
      md:h-12 
    bg-slate-900"
    >
      <p
        className="text-white text-sm
      md:text-lg
      lg:text-xl"
      >
        @2023 {stringsFooter[lang].text}
      </p>
    </footer>
  );
}
