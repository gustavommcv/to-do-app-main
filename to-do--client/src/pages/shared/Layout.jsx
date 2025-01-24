import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Layout() {
    return (
        <>
            <Header title={"ToDo"} />
            <main>
                <Outlet />
            </main>
        </>
    )
}
