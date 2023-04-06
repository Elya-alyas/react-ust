import React from 'react';
import servise_style from './OurServises.module.css'
import tools_icon from '../../../../assets/HomePage/toolsIcon.svg'
import glass_icon from '../../../../assets/HomePage/glassIcon.svg'
import gear_icon from '../../../../assets/HomePage/gearIcon.svg'
import analys_icon from '../../../../assets/HomePage/analysIcon.svg'
import prototype_icon from '../../../../assets/HomePage/prototypeIcon.svg'
import design_icon from '../../../../assets/HomePage/designIcon.svg'
import arrow from '../../../../assets/HomePage/Arrow right.svg'

const OurServises = () => {
    return (
        <section className={servise_style.servise_section}>
            <div className={servise_style.title_block}>
                <h4 className={servise_style.servise_title}>Наши предложения</h4>
                <h2 className={servise_style.servise_main_title}>Разработка полного цикла</h2>
                <p className={servise_style.servise_title_description}>Мы можем разработать для вас любое индивидуальное решение. Наша компания обладает широкими возможностями для успешного создания технически-сложных систем.</p>
            </div>

            <div className={servise_style.cards}>
                <div className={servise_style.card}>
                    <img src={tools_icon} alt="tools" />
                    <h3>Программируем</h3>
                    <p>Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
                </div>
                <div className={servise_style.card}>
                    <img src={glass_icon} alt="tools" />
                    <h3>Тестируем</h3>
                    <p>Проводим ручное функциональное тестирование и пишем UI-автотесты. Готовим чек-листы и тест-кейсы.</p>
                </div>
                <div className={servise_style.card}>
                    <img src={gear_icon} alt="tools" />
                    <h3>Поддерживаем</h3>
                    <p>Работаем по SLA. Следим за стабильностью работы приложения, обновляем под новые устройства и версии iOS и Android.</p>
                </div>
                <div className={servise_style.card}>
                    <img src={analys_icon} alt="tools" />
                    <h3>Анализируем</h3>
                    <p>Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.</p>
                </div>
                <div className={servise_style.card}>
                    <img src={prototype_icon} alt="tools" />
                    <h3>Прототипируем</h3>
                    <p>Прорабатываем пользовательские сценарии, проектируем логику приложения, скечируем основные экраны.</p>
                </div>
                <div className={servise_style.card}>
                    <img src={design_icon} alt="tools" />
                    <h3>Дизайним</h3>
                    <p>Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы.</p>
                </div>
            </div>
            {/* <div></div> */}
            <button className={servise_style.all_servise_btn}>Все услуги <img src={arrow} alt="arrow" /> </button>
        </section>
    );
};

export default OurServises;