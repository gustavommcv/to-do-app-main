import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header({ title }) {

    return (
        <header className="header">
            <div className="header__container">
                    <h1 className="header__title"><NavLink to={"/"}>{title}</NavLink></h1>

                    {/* <div>
                        <button className='header__button'>Sign In</button>
                        <button className='header__button'>Sign Up</button>
                    </div> */}
            </div>
        </header>
        
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
