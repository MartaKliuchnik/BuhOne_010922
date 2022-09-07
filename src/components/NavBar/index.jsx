import React from 'react';
import s from './style.module.sass';
import logo from './media/buh_one_logo.png'

export default function NavBar() {

    return (
        <nav className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.logo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div> 
            <div className={s.header_menu}>
                <button><i class={["fa-solid fa-bars", s.open_header_menu]. join(' ')}></i></button>
                <ul className={s.nav_menu}>
                    <li>Главная</li>
                    <li>услуги</li>
                    <li>кейсы</li>
                    <li>о компании</li>
                    <li>контакты</li>
                </ul>
                <div className={s.contact_btn}>
                    <button>Связаться</button>
                </div>
            </div>
        </nav>
    )
}
