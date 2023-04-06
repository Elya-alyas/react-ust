import React from 'react';
import lamp from '../../../../assets/HomePage/lampIcon.svg'
import laptop from '../../../../assets/HomePage/laptopIcon.svg'
import cube from '../../../../assets/HomePage/cubeIcon.svg'
import team from '../../../../assets/HomePage/commandIcon.svg'
import style from './OurAdvantages.module.css'

const OurAdvantages = () => {
    return (
        <section className={style.advantages_section}>
            <div className={style.container}>
                <div className={style.title_block}>
                    <h4 className={style.title}>Наши</h4>
                    <h2 className={style.main_title}>Преимущества</h2>
                    <p className={style.title_description}>Основная ценность нашей компании - создание качественного продукта и удовлетворение потребностей клиента. Поэтому перед началом разработки мы проводим маркетинговые исследования и помогаем клиенту определить стратегию развития продукта.
                    </p>

                </div>

                <div className={style.advantages_cards}>
                    <div className={style.card}>
                        <div className={style.image}>
                            <img src={lamp} alt="lamp" />
                        </div>
                        <h5>Разработка программного обеспечения</h5>
                        <p>Мы обеспечиваем полный цикл разработки программного обеспечения, развертывания и послерелизной поддержки. Вы получите функциональный, масштабируемый и безопасный продукт, идеально подходящий для бизнеса.
                            MVP за 90 дней.</p>
                    </div>
                    <div className={style.card}>

                        <div className={style.image}>
                            <img src={laptop} alt="laptop" />
                        </div>
                        <h5>«Спасение» вашего проекта</h5>
                        <p>Мы присоединяемся к любому этапу разработки, анализируем текущее состояние продукта, возвращаем процесс разработки в нужное русло и выпускаем продукт вовремя.</p>
                    </div>
                    <div className={style.card}>

                        <div className={style.image}>
                            <img src={cube} alt="cube" />
                        </div>
                        <h5>Создание выделенного ИТ-центра</h5>
                        <p>Мы предоставляем выделенные команды на полный рабочий день, включающие аналитиков, дизайнеров, разработчиков, QA-инженеров и менеджеров проектов. Соберите свою команду всего за несколько дней.</p>
                    </div>
                    <div className={style.card}>

                        <div className={style.image}>
                            <img src={team} alt="team" />
                        </div>
                        <h5>Профессионализм команды</h5>
                        <p>Избегайте затрат на инвестиции в развитие внутренних навыков. Нанимайте профессионалов с необходимыми навыками для обеспечения результатов проекта и своевременной доставки.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAdvantages;