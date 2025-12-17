import "./App.css";
import Card from "./components/Card/Card";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import { ThemeProvider } from "./contexts/Theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setTheme] = useState("light");

  const lightTheme = (): void => {
    setTheme("light");
  };
  const darkTheme = (): void => {
    setTheme("dark");
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.remove("light", "dark");
      html.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div>
        <div className="text-3xl font-bold underline">
          <ThemeBtn />
        </div>
        <div className="mt-10">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
