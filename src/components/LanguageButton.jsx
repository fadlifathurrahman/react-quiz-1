import { useContext } from "react";
import { LangContext } from "../App";

export default function LanguageButton() {
  const { setLang } = useContext(LangContext);

  return (
    <div className="flex gap-2">
      <button onClick={() => setLang("id")}>Indonesia</button>
      <button onClick={() => setLang("en")}>English</button>
    </div>
  );
}
