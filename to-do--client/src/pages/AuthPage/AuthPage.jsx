/* eslint-disable react/prop-types */
import { useActionData } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import './AuthPage.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

export default function AuthPage({ mode }) {

    const actionData = useActionData();

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`auth-page auth-page--${theme}`}>
            <div className={`auth-page__container auth-page__container--${theme}`}>
                <h2 className='auth-page__title'>Auth Page / {mode}</h2>
                <AuthForm errors={actionData?.errors} />
            </div>
        </div>
    );
}
