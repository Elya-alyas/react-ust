import React from 'react';
import style from './Main.module.css'
import bg from '../../../../assets/HomePage/bg.png'

const Main = () => {
    return (
        <section className={style.main_section}>
            <div className={style.container}>
                <h1 className={style.title}>Студия разработки программного обеспечения <p>с продуктовым мышлением</p></h1>
                <p className={style.title_description}>Мы создаем кроссплатформенные мобильные приложения и веб-платформы и находим для них лучшие решения.</p>
                <button className={style.orderBtn}>Заказать проект</button>

                <div className={style.adjustments}>
                    <div>
                        <h3>4+</h3>
                        <p>Года опыта</p>
                    </div>
                    <div>

                        <h3>30+</h3>
                        <p>Завершенных проектов</p>
                    </div>
                    <div>

                        <h3>4+</h3>
                        <p>Года опыта</p>
                    </div>
                    <div>

                        <h3>4+</h3>
                        <p>Года опыта</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;