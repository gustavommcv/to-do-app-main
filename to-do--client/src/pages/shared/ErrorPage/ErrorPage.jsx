import { useRouteError } from 'react-router';
import { useContext, useEffect } from "react";

import './ErrorPage.scss';
import ThemeContext from '../../../context/themeContext';
import Header from '../../../components/Header/Header';

export default function ErrorPage() {
    const { theme } = useContext(ThemeContext);
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';
    let status = error.status

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(`theme--${theme}`);
    }, [theme]);

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404 || error.status === 400) {
        title = "Not found!";
        message = 'Could not find resource or page';
    }

    return (
    <>
        <Header />
        <main>
            <div className={`error-page`}>
                <div className={`error-page__container error-page__container--${theme}`}>
                    <h1 className='error-page__title'>{title}</h1>
                    <p className="error-page__status">Error {status}</p>
                    <p className='error-page__message'>{message}</p>
                </div>
            </div>
        </main>
    </>
    );
}
