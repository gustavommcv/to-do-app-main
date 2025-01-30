import { useContext } from 'react';
import './HomePage.scss';
import ThemeContext from '../../context/themeContext';
import { Link, useRouteLoaderData } from 'react-router-dom';

export default function HomePage() {

    const { theme } = useContext(ThemeContext);
    const data = useRouteLoaderData('root');

    return (
        <div className={`tasks-home-page home-page home-page--${theme}`}>
            <div className={`home-page__container home-page__container--${theme}`}>
                <h1 className='home-page__title'>Welcome {data ? 'User' : 'Visitor'}!</h1>

                {data && <Link className={`home-page__link home-page__link--${theme}`} to='/tasks'>See your Tasks</Link>}
                {!data && <div className='home-page__login-container'>
                    <p>Please, Log In or Sign Up to access this app:</p>
                    <div className='home-page__buttons'>
                        <Link to='/login' className={`home-page__link home-page__link--${theme}`}>Login</Link>
                        <Link to='/signup' className={`home-page__link home-page__link--${theme}`}>SignUp</Link>
                    </div>
                </div>} 
            </div>
        </div>
    );
}
