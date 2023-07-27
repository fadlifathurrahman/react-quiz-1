import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header theme={theme} />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
}
