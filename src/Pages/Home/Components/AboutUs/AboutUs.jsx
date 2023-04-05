import React from 'react';
import img from '../../../../assets/HomePage/aboutUsImg.png'
import style from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <section className={style.about_us}>

            <h4 className={style.section_title}>О нас</h4>
            <div className={style.container}>
                <div className={style.imageBlock}>
                    <img src={img} alt='img' />
                </div>
                <div className={style.aboutUs_text_content}>
                    <h2 className={style.textContentTitle}>Почему UST?</h2>
                    <p>
                        К услугам наших клиентов разработка программного обеспечения на заказ, проектирование пользовательских интерфейсов, создание сайтов (в том числе на основе индивидуальной CMS) и их поддержка.
                    </p>
                    <p>
                        Мы также предлагаем услугу IT-консалтинга — налаживание работы любых информационно-аналитических систем и онлайн-решений компании для большей эффективности бизнес-процессов.
                    </p>

                    <p>
                        Сегодня компания «Union Smart Technology» имеет представительства с умелыми project‑менеджерами в РФ и Словакии.
                    </p>

                    <p>
                        Такая география позволяет привлекать наиболее ответственных и квалифицированных программистов и живо реагировать на потребности заказчиков со всего света, сохраняя комфортный уровень цен.
                    </p>
                    <div className={style.btns}>

                        <button className={style.vacancyBtn}>Вакансии</button>
                        <button className={style.readMoreBtn}>Читать далее</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;