import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {

}


export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png" />
            <div className={s.loginBLock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}