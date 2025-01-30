import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/themeContext";

export default function Layout() {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(`theme--${theme}`);
    }, [theme])

    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
        </>
    );
}
