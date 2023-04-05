import React from 'react';
import faq_style from './FAQ.module.css'

const FAQ = () => {
    return (
        <section className={faq_style.faq_section}>
            <h4 className={faq_style.faq_title}>FAQ</h4>
            <h2 className={faq_style.faq_main_title}>Возможно, у вас остались вопросы. Отвечаем</h2>

            <div className={faq_style.questions}>
                <div className={faq_style.faq_question_toggle} id={faq_style.first_question}>
                    <div className={faq_style.question_block}>
                        <h3 className={faq_style.faq_question}>Когда я смогу использовать готовый продукт? </h3>
                        <h3 className={faq_style.close_answer}>X</h3>
                    </div>
                    <p className={faq_style.faq_answer}>Мы обеспечиваем полный цикл разработки программного обеспечения, развертывания и послерелизной поддержки. Вы получите функциональный, масштабируемый и безопасный продукт, идеально подходящий для бизнеса.
                        MVP за 90 дней.</p>

                </div>
                <div className={faq_style.faq_question_toggle}>
                    <div className={faq_style.question_block}>
                        <h3 className={faq_style.faq_question}>У меня есть недоработанное приложение. Вы можете его доработать? </h3>
                        <h3 className={faq_style.open_answer}>+</h3>
                    </div>
                </div>
                <div className={faq_style.faq_question_toggle} id={faq_style.third_question}>
                    <div className={faq_style.question_block}>
                        <h3 className={faq_style.faq_question}>Сколько стоит разработка сайта? </h3>
                        <h3 className={faq_style.open_answer}>+</h3>
                    </div>
                </div>
                <div className={faq_style.faq_question_toggle}>
                    <div className={faq_style.question_block}>
                        <h3 className={faq_style.faq_question}>Вы даёте гарантию на мобильное приложение? </h3>
                        <h3 className={faq_style.open_answer}>+</h3>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQ;