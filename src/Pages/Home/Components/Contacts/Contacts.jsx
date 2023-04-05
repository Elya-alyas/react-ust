import React from 'react';
import LinkedIDLogo from '../../../../assets/HomePage/LinkedIn - Negative.svg'
import GoogleLogo from '../../../../assets/HomePage/Google - Negative.svg'
import fbLogo from '../../../../assets/HomePage/Facebook - Negative.svg'
import dribbleLogo from '../../../../assets/HomePage/Dribbble - Negative.svg'
import instagramLogo from '../../../../assets/HomePage/Instagram - Negative.svg'
import contacts_style from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className={contacts_style.contacts_section}>
            <div className={contacts_style.bg}>
                <div className={contacts_style.title_block}>
                    <h4 className={contacts_style.contact_title}>Связаться</h4>
                    <p className={contacts_style.contact_main_title}>Готовы предложить Вам лучшие IT-решения</p>
                </div>

            </div>


            <div className={contacts_style.contacts_container}>
                <div className={contacts_style.ideas}>
                    <h4 className={contacts_style.ideas_title}>Есть идея?</h4>
                    <p className={contacts_style.ideas_description}>У вас есть уже существующий проект, который вы хотите усовершенствовать? Вы хотите воплотить в жизнь смелую идею, но вам нужна помощь? Или вы вообще не знаете, с чего начать реализацию проекта?
                    </p>
                    <div className={contacts_style.contact_info}>

                        <div className={contacts_style.ideas_contact_si}>
                            <h6 className={contacts_style.si_title}>Словения</h6>
                            <p className={contacts_style.si_email}>contact@unionsmarttech.ru</p>
                            <p className={contacts_style.si_tel_number}>+421 494 539-852</p>
                        </div>

                        <div className={contacts_style.ideas_contact_ru}>
                            <h6 className={contacts_style.ru_title}>Россия</h6>
                            <p className={contacts_style.ru_email}>contact@unionsmarttech.ru</p>
                            <p className={contacts_style.ru_tel_number}>+7 911 932-90-29</p>
                        </div>

                    </div>

                    <div className={contacts_style.socialmedia}>
                        <img className={contacts_style.socialmedia_logo} src={LinkedIDLogo} alt="LinkedIn" />
                        <img className={contacts_style.socialmedia_logo} src={GoogleLogo} alt="Google" />
                        <img className={contacts_style.socialmedia_logo} src={fbLogo} alt="FB" />
                        <img className={contacts_style.socialmedia_logo} src={dribbleLogo} alt="Dribble" />
                        <img className={contacts_style.socialmedia_logo} src={instagramLogo} alt="instagram" />
                    </div>
                </div>

                <div className={contacts_style.contact_us}>
                    <h3 className={contacts_style.contact_us_title}>Связаться с нами</h3>
                    <p className={contacts_style.contact_us_description}>Оставьте свою контактную информацию, и мы с радостью свяжемся с вами! </p>

                    <form action="">
                        <input type="text" id={contacts_style.inpName} placeholder='Имя*' />
                        <input type="text" id={contacts_style.inpName} placeholder='Компания' />
                        <input type="text" name="" id={contacts_style.inpName} placeholder='Электронная почта*' />
                        <textarea id={contacts_style.inpText} placeholder='Сообщение' />
                        <p className={contacts_style.req_text}><span>*</span> обязательные поля для заполнения</p>

                        <div className={contacts_style.btn_und_privacyPolicy}>

                            <button className={contacts_style.contact_us_submitBtn}>Отправить</button>
                            <span className={contacts_style.contact_us_privacy_policy}>Нажимая на кнопку, вы соглашаетесь с <a href="">Политикой конфидециальности</a></span>
                        </div>

                    </form>
                </div>
            </div>


        </section>
    );
};

export default Contacts;