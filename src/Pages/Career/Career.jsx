import React from 'react';
import style from './Career.module.css'
import career from '../../assets/assets-team/project_two_first_Img.png'
import mail_com from '../../assets/assets-team/mail_com.png'
import habr from '../../assets/assets-team/habrber.png'
import headhunter from '../../assets/assets-team/headhunter.png'
import inke from '../../assets/assets-team/inbek.png'
import img_end from '../../assets/assets-team/img_end.png'
import end_fone from '../../assets/assets-team/end_fone.png'
import the_end from '../../assets/assets-team/the_end.png'


const Career = () => {
    return (
        <div className={style.main_block}>
            <img className={style.career_first} src={career} alt="" />
            <div className={style.container}>
                <h1 className={style.text} >Карьера</h1>
                <p className={style.paragraph} >Присоединяйтесь к команде победителей,
                    способных решать масштабные нешаблонные задачи,
                    достойные лучших умов отрасли.</p>
                <button className={style.btn} >Узнать больше</button>
            </div>
            <div className={style.middle}>
                <h2 className={style.middle_first}>С нами классно</h2>
                <p className={style.middle_two} >В нашей команде работают исключительно высококвалифицированные
                    специалисты, которые обладают качественными знаниями,
                    навыками и опытом работы с крупными проектами.
                    Мы заботимся о том, чтобы каждый сотрудник имел возможность
                    обучаться и развивать себя в любимом деле. А также о том,
                    чтобы работа была вашим безопасным местом, и вы чувствовали себя
                    комфортно, выполняя свои задачи.</p>
            </div>
            <div className={style.middle_three}>
                <h4 className={style.java_title} >Java-программист (Midle-Senior)</h4>
                <h6 className={style.one_skills} >Навыки</h6>
                <div className={style.middle_four}>
                    <button className={style.table} >Бэкенд</button>
                    <button className={style.table} >Java</button>
                    <button className={style.table} >SQL</button>
                    <button className={style.table} >ООП</button>
                    <button className={style.table} >PostgreSQL</button>
                    <button className={style.tables} >Java Spring Framework</button>
                </div>
                <div className={style.location}>
                    <h6 className={style.two_skills} >Местоположение и тип занятости</h6>
                    <button className={style.table_two} >Полный рабочий день</button>
                    <button className={style.table_two} >Можно удаленно</button>
                </div>
                <div className={style.responsibilities}>
                    <h6 className={style.item} >Обязанности</h6>
                    <ul className={style.ul}>
                        <li className={style.item_li} >Участие в разработке серверной части сервиса начисления кешбека;</li>
                        <li className={style.item_li} >Покрытие написанных сервисов тестами. Согласование реализуемых методов и подходов с командой разработчиков клиентов;</li>
                        <li className={style.item_li} >Реализация логики уведомления клиентов о происходящих событиях;</li>
                        <li className={style.item_li} >Для сервера используется Spring Boot Framework.</li>
                    </ul>
                </div>
                <div className={style.req}>
                    <h6 className={style.req_item} >Требования</h6>
                    <ul className={style.req_first} >
                        <li className={style.item_first} >Опыт коммерческой разработки back-end на Java от 1 года;</li>
                        <li className={style.item_first} >Опыт работы с Spring Framework;</li>
                        <li className={style.item_first} >Умение писать unit-тесты и понимание, зачем это нужно;</li>
                        <li className={style.item_first} >Опыт работы с PostgreSQL, Oracle (или другими классическими базами данных);</li>
                        <li className={style.item_first}>Умение находить и использовать новые сервисы и технологии.</li>
                    </ul>
                </div>
                <div className={style.Conditions}>
                    <h6 className={style.con} >Условия</h6>
                    <ul className={style.con_two}>
                        <li className={style.Conditions} >Активная разработка и возможность увидеть созданную с вами систему на бою;</li>
                        <li className={style.Conditions} >Каждый специалист уникален, а потому уровень заработной платы обсуждается индивидуально;</li>
                        <li className={style.Conditions} >Дружелюбная, не бюрократизированная обстановка;</li>
                        <li className={style.Conditions} >Оформление по ТК;</li>
                        <li className={style.Conditions} >Удаленная работа. При необходимости встречаемся в неформальной обстановке;</li>
                        <li className={style.Conditions} >Стабильная зарплата;</li>
                        <li className={style.Conditions} >Разработка на бою.</li>
                    </ul>
                </div>
                <div className={style.img_icon}>
                    <img className={style.icon_img} src={mail_com} alt="" />
                    <img className={style.icon_img} src={habr} alt="" />
                    <img className={style.icon_img} src={headhunter} alt="" />
                    <img className={style.icon_img} src={inke} alt="" />
                </div>
                <div className={style.category}>
                    <h4 className={style.cat} >IOS-разработчик (Midle-Senior)</h4>
                    <button className={style.btn_one} >Словения</button>
                    <button className={style.btn_two} >Россия</button>
                    <h4 className={style.cat} >Бизнес-Аналитик (Senior, B2+)</h4>
                    <button className={style.btn_three} >Работа в офисе</button>
                    <button className={style.btn_four} >Словения</button>
                    <h4 className={style.cat} > Помощник Маркетолога (Junior).</h4>
                    <button className={style.btn_five} >Работа в офисе</button>
                    <button className={style.btn_six} >Россия</button>
                </div>
                <div className={style.registration} >
                    <img className={style.img_end} src={img_end} alt="" />
                    <h4 className={style.txt_one} >Возможность</h4>
                    <h2 className={style.txt_two}>Готовы стать частью команды UST?</h2>
                    <p className={style.txt_three} >Если вы хотите стать частью нашей команды, оставьте свои контакты и мы свяжемся с вами! </p>
                </div>
                <div className={style.modal_windows}>
                    <img className={style.end_fone} src={end_fone} alt="" />
                    <div className={style.system_one}>
                        <h5 className={style.h5} >Персональная информация</h5>
                        <p className={style.p} >Расскажите, как к вам обращаться и как можно связаться с вами</p>
                    </div>
                    <div className={style.system_two}>
                        <input className={style.inp_one} placeholder='ИМЯ' type="text" name="text" id="inp" />
                        <input className={style.inp_two} placeholder='Электронная почта' type="text" name="text" id="inp" />
                        <input className={style.inp_three} placeholder='Телефон' type="text" name="text" id="" />
                    </div>
                    <div className={style.system_three}>
                        <h5 className={style.one_h5} >Резюме/Портфолио</h5>
                        <p className={style.two_p}>Загрузите сюда свое резюме и/или прикрепите ссылку на портфолио</p>
                    </div>
                    <div className={style.system_four}>
                        <button className={style.three_btn} >Добавить файл</button>
                        <p className={style.four_p} >Мы принимаем файлы PDF, DOCX, JPG, и PNG</p>
                        <input className={style.inp} placeholder='Ссылка на портфолио' type="text" />
                    </div>
                    <div className={style.system_five}>
                        <h5 className={style.five_h5} >Вопросы</h5>
                        <p className={style.six_p} >Пожалуйста, ответьте на вопросы</p>
                    </div>
                    <div className={style.system_six}>
                        <input className={style.seven_inp} placeholder='Сопроводительное письмо' type="text" />
                        <img className={style.nine_img} src={the_end} alt="" />
                    </div>
                    <div className={style.system_seven} >
                        <p className={style.ten_p} >обязательные поля для заполнения</p>
                        <button className={style.btn_eleven} >Подать заявку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;