import { useState } from "react";
import ThemeContext from "./themeContext";

// eslint-disable-next-line react/prop-types
export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = () => { 
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const ctxValue = {
        theme,
        toggleTheme
    }

    return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
}
