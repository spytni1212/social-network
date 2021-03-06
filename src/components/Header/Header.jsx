import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://st.depositphotos.com/1008709/4676/i/950/depositphotos_46768767-stock-photo-hands-in-art-logo.jpg' alt='/'/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login 
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;