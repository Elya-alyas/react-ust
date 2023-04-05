import React from 'react';
import mobile from '../../../../assets/HomePage/mobileControl.png'
import voiceControl from '../../../../assets/HomePage/voiceControl.png'
import vroom from '../../../../assets/HomePage/vroomGames.png'
import atol from '../../../../assets/HomePage/atolServise.png'
import prorabX from '../../../../assets/HomePage/prorabX.png'
import actual from '../../../../assets/HomePage/actual.png'
import portfolio_style from './Portfolio.module.css'

const Portfolio = () => {
    return (
        <section className={portfolio_style.portfolio_section}>
            <div className={portfolio_style.portfolio_bg_block}>

            </div>
            <div className={portfolio_style.container}>
                <h4 className={portfolio_style.portfolio_title}>Портфолио</h4>
                <h2 className={portfolio_style.portfolio_main_title}>Завершенные проекты</h2>
                <p className={portfolio_style.portfolio_title_description}>Мы специализируемся на предоставлении программного обеспечения высшего качества и предоставлении высококвалифицированных команд с опытом в области разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг по разработке программного обеспечения на заказ.</p>

                <div className={portfolio_style.portfolio_cards}>
                    <div className={portfolio_style.card} id={portfolio_style.card1}>
                        <img src={mobile} alt="mobile" />
                        <h5>Мобильный контроль</h5>
                        <p>Сервис для работы с клиентами и партнерами</p>
                    </div>
                    <div className={portfolio_style.card} id={portfolio_style.card2}>
                        <img src={voiceControl} alt="voiceControl" />
                        <h5>Голосовое управление</h5>
                        <p>Сервис для работы по задачам</p>
                    </div>
                    <div className={portfolio_style.card} id={portfolio_style.card3}>
                        <img src={vroom} alt="vroomGames" />
                        <h5>Vroomgames</h5>
                        <p>Сервис для работы со списками заказов</p>
                    </div>
                    <div className={portfolio_style.card} id={portfolio_style.card4}>
                        <img src={atol} alt="Atol" />
                        <h5>ATOL-бонус</h5>
                        <p>Мобильное приложение для профессионалов</p>
                    </div>
                    <div className={portfolio_style.card} id={portfolio_style.card5}>
                        <img src={prorabX} alt="Prorab-X" />
                        <h5>Prorab-x</h5>
                        <p>Мобильное приложение для строителей</p>
                    </div>
                    <div className={portfolio_style.card} id={portfolio_style.card6}>
                        <img src={actual} alt="Актуаль" />
                        <h5>Актуаль</h5>
                        <p>Сайт промом игры</p>
                    </div>
                </div>
                <div className={portfolio_style.portfolio_btns}>
                    <button className={portfolio_style.portfolio_btn}>Портфолио</button>
                    <button className={portfolio_style.order_btn}>Заказать проект</button>
                </div>
            </div>

        </section>
    );
};

export default Portfolio;