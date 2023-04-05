import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';
import icon from '../../assets/UST-icon.png'
import line from '../../assets/Line.png'
import flag from '../../assets/flag.png'
import lupa from '../../assets/lupa.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className={style.container}>
                    <div className={style.block_first}>
                        <img className={style.icon} src={icon} alt={icon} />
                        <div className={style.block_title}>
                            <h1 className={style.title}>Union Smart Technology</h1>
                            <h2 className={style.title_small}>Simple solutions for complex problems</h2>
                        </div>
                    </div>
                    <div className={style.block_second}>
                        <ul className={style.menu}>
                            <li><NavLink className={style.menu_item} to={'/'}>ГЛАВНАЯ</NavLink></li>
                            <img src={line} alt={line} />
                            <li ><NavLink className={style.menu_item} to={'/team'}>КОМАНДА</NavLink></li>
                            <img src={line} alt={line} />
                            <li><NavLink className={style.menu_item} to={'/services'}>УСЛУГИ</NavLink></li>
                            <img src={line} alt={line} />
                            <li><NavLink className={style.menu_item} to={'/career'}>КАРЬЕРА</NavLink></li>
                            <img src={line} alt={line} />
                            <li><NavLink className={style.menu_item} to={'/portfolio'}>ПОРТФОЛИО</NavLink></li>
                            <img src={line} alt={line} />
                            <li><NavLink className={style.menu_item} to={'/game'}>GAME</NavLink></li>
                        </ul>
                        <img className={style.flag_img} src={flag} alt={flag} />
                        <img className={style.liner} src={line} alt={line} />
                        <img className={style.lupa_img} src={lupa} alt={lupa} />
                    </div>



                </div>

            </nav>


        </header>
    );
};

export default Header;