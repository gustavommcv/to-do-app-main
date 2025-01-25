/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './ErrorsList.scss';
import ThemeContext from '../../context/themeContext';

export default function ErrorsList({ errors }) {

    const { theme } = useContext(ThemeContext);

    if (!errors) {
        return;
    }

    return (
        <div className={`errors errors--${theme}`}>
            <p className='errors__title'>You need to review some information: </p>
            {errors && errors.map(error => {
                return <p className='errors__error' key={error.msg}>{error.msg}</p>
            })}
        </div>
    );
}
