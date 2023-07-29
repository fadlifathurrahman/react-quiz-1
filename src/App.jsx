import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const LangContext = createContext({
  lang: null,
  setLang: () => {},
});

export default function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("id");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header theme={theme} lang={lang} />
        <Outlet />
        <Footer />
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}
