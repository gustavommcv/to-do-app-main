import './Header.scss';
import { NavLink, useRouteLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import { logout } from '../../util/logout';

export default function Header() {

    const data = useRouteLoaderData('root');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLogout = async () => {
        await logout();
    };

    return (
        <header className={`header header--${theme}`}>
            <div className="header__container">
                    <div className='header__title__container'>
                        <h1 className={`header__title header__title--${theme}`}><NavLink to={"/"}>TODO</NavLink></h1>
                        {data && <p className={`header__s-link header__s-link--${theme}`}>
                                <NavLink to="/tasks">/ Tasks</NavLink>
                            </p>}
                    </div>

                    <div>
                        <button 
                            className={`header__button header__button--${theme}`} 
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <button onClick={toggleTheme} className={`header__button header__button--${theme}`}>
                            {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512"><path fill="#D9D0D9" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1728 1792"><path fill="#FFFFFF" d="M873 416q-130 0-240.5 64.5t-175 175T393 896t64.5 240.5t175 175T873 1376t240.5-64.5t175-175T1353 896t-64.5-240.5t-175-175T873 416zm853 757q0 6-7 12t-13 8l-293 97v306q0 16-13 26q-14 9-29 4l-292-94l-180 248q-9 12-26 12t-26-12l-180-248l-292 94q-15 5-29-4q-12-8-14-26v-306l-292-97q-16-5-20-20q-5-16 4-29l180-248L24 648q-9-13-4-29q4-15 20-20l292-97V196q2-18 14-26q14-9 29-4l292 94L847 12q9-12 26-12t26 12l180 248l292-94q15-5 29 4q13 10 13 26v306l293 97q6 2 13 8t7 12q4 15-4 29l-181 248l181 248q8 14 4 29zm-277-277q0-157-77-289.5T1162.5 397T873 320t-289.5 77T374 606.5T297 896q0 118 46 225t123 184t183.5 122.5T873 1473q158 0 290.5-77.5t209-210T1449 896z"/></svg>}
                        </button>
                    </div>
            </div>
        </header>
    );
}
