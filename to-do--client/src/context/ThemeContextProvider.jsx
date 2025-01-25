import { useState } from "react";
import ThemeContext from "./themeContext";

// eslint-disable-next-line react/prop-types
export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => { setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));};

    const ctxValue = {
        theme,
        toggleTheme
    }

    return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
}
