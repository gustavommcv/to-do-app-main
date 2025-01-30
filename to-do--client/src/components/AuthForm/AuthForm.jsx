/* eslint-disable react/prop-types */
import { useContext, useRef } from 'react';
import './AuthForm.scss';
import { Form, useNavigation } from 'react-router-dom';
import ThemeContext from '../../context/themeContext';
import ErrorsList from '../ErrorsList/ErrorsList';

export default function AuthForm({ errors }) {
    const isSubmitting = useNavigation().state === 'submitting';
    const formRef = useRef(null);

    const { theme } = useContext(ThemeContext);

    const handleSave = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };

    return (
        <>
            <Form ref={formRef} className='auth-form' method='post' onKeyDown={handleKeyDown}>
                <div className={`task-details__fields task-details__fields--${theme}`}>
                        <input
                            id="email"
                            name='email'
                            className={`task-details__input task-details__input--${theme}`}
                            type="email"
                            placeholder='E-mail'
                        />
                        <input
                            id="password"
                            name='password'
                            className={`task-details__input task-details__input--${theme}`}
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    {isSubmitting ? (
                    <span className="loader"></span>
                ) : (
                    <button onClick={handleSave} type="button" className={`auth-form__button auth-form__button--${theme}`}>
                        Save
                    </button>
                )}
            </Form>
            <ErrorsList errors={errors} />
        </>
    );
}
