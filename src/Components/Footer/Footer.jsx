import React from 'react';
import style from './Footer.module.css'
import line from '../../assets/Line.png'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.up_block}>
                    <div className={style.title_first}>
                        <h3>Российская команда</h3>
                        <ul className={style.info}>
                            <li>contact@unionsmarttech.ru</li>
                            <li>+7 911 932-90-29</li>
                            <li className={style.out}>24 Entuziastov street,</li>
                            <li>Saint Petersburg, 191 119</li>
                        </ul>
                    </div>
                    <div className={style.title_second}>
                        <h3>Словакская команда</h3>
                        <ul className={style.info}>
                            <li>contact@unionsmarttech.ru</li>
                            <li>+421 494 539-852</li>
                            <li className={style.out}>24 Entuziastov street,</li>
                            <li>Saint Petersburg, 191 119</li>
                        </ul>
                    </div>
                    <div className={style.title_third}>
                        <ul className={style.inform}>
                            <li>ГЛАВНАЯ</li>
                            <li>КОМАНДА</li>
                            <li>УСЛУГИ</li>
                        </ul>
                    </div>
                    <div className={style.title_fourth}>
                        <ul className={style.inform}>
                            <li>КАРЬЕРА</li>
                            <li>ПОРТФОЛИО</li>
                            <li>КОНТАКТЫ</li>
                        </ul>
                    </div>
                    <div className={style.title_fifth}>
                        <ul className={style.inform}>
                            <li>FACEBOOK</li>
                            <li>INSTAGRAM</li>
                            <li>DRIBBBLE</li>
                            <li>LINKEDIN</li>
                        </ul>
                    </div>
                </div>
                <div className={style.bottom_block}>
                    <h4>Разработка: студия ЯР</h4>
                    <div className={style.bottom_confidens}>
                        <h5>Политика конфиденциальности </h5>
                        <img className={style.line_image} src={line} alt={line} />
                        <h5>Cookies Policy</h5>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;