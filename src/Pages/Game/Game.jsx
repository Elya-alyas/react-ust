import React from 'react';
import style from './Game.module.css'
// import gamephoto from '../../assets/game.png'
import pause from '../../assets/pause.png'
import message from '../../assets/message.png'
import block from '../../assets/block.png'
import glasse from '../../assets/glasse.png'
import backfoto from '../../assets/backfoto.png'
import skline from '../../assets/sk_line.png'
import questfoto from '../../assets/questfoto.png'
import strikerfoto from '../../assets/strikerfoto.png'
import trackingfoto from '../../assets/trackingfoto.png'
import optitrack from '../../assets/optitrack.png'
import antilatency from '../../assets/antilatency.png'
import vivepro from '../../assets/vivepro.png'
import pyramid from '../../assets/pyramid.png'
import insects from '../../assets/insects.png'
import arena from '../../assets/arena.png'
import bg_development from '../../assets/bg_development.png'
import mobile from '../../assets/mobile.png'
import educationfoto from '../../assets/educationfoto.png'
import conferencefoto from '../../assets/conferencefoto.png'
import video from '../../assets/video.png'
import room from '../../assets/room.png'
import roommiddle from '../../assets/roommiddle.png'
import roombar from '../../assets/roombar.png'

const Game = () => {
    return (
        <div className={style.Game}>
            <section className={style.game_block}>
                {/* <img className={style.gamephoto} src={gamephoto} alt={gamephoto} /> */}
                <div className={style.containers}>
                    <div className={style.block_text}>
                        <h2>Games & IT develoopment</h2>
                        <h1>VROOM Games</h1>
                        <h3>Крупнейший в Санкт-Петербурге VR-полигон, посетители которого могут протестировать новейшее оборудование, сыграть в увлекательные игры, пообщаться с единомышленниками и найти друзей. Также компания специализируется на графическом и игровом дизайне, создании визуальных эффектов.</h3>
                        <button className={style.block_text_btn}>vroomgames.ru</button>
                    </div>
                    <div className={style.block_pause}>
                        <img src={pause} alt={pause} />
                    </div>

                </div>
            </section>

            <section className={style.information}>
                <div className={style.info_message}>
                    <img className={style.message} src={message} alt={message} />
                    <img className={style.block} src={block} alt={block} />
                    <p>Независимая команда специалистов: программистов, дизайнеров, инженеров</p>
                </div>
                <div className={style.development}>
                    <img className={style.message} src={glasse} alt={glasse} />
                    <img className={style.block} src={block} alt={block} />
                    <p>Разработки любой сложности: виртуальная и дополненная реальности, мобильные приложения</p>
                </div>
                <div className={style.participation}>
                    <img className={style.message} src={backfoto} alt={backfoto} />
                    <img className={style.skline} src={skline} alt={skline} />
                    <img className={style.block} src={block} alt={block} />
                    <p>Аккредитованный участник инновационного центра «Сколково»</p>
                </div>
            </section>
            <section className={style.our_equipment}>
                <h1>Наше оборудование</h1>
                <div className={style.container_equipment}>
                    <div className={style.text_equipment}>
                        <div className={style.quest}>
                            <h2>Oculus Quest 2</h2>
                            <p>Новейший шлем с контроллерами от компании Facebook. Работает без проводов, идеально подходит для симуляторов и образовательных приложений</p>
                        </div>
                        <div className={style.striker}>
                            <h2>Striker VR</h2>
                            <p>Виртуальное оружие с эффектом реальной отдачи для максимально острых ощущений от игрового процесса</p>
                        </div>
                    </div>
                    <div className={style.image_game}>
                        <img className={style.questfoto} src={questfoto} alt={questfoto} />
                        <img className={style.strikerfoto} src={strikerfoto} alt={strikerfoto} />
                    </div>
                </div>
            </section>
            <section className={style.tracking_systems}>
                <div className={style.tracking_containers}>
                    <div className={style.tracking_main}>
                        <div className={style.tracking_text}>
                            <h1>Системы трекинга</h1>
                            <p>Захват движения (Motion Capture) - передавая технология полного погружения в виртуальную реальность. Мы работаем со всеми ведущими производителями и их продуктами.</p>
                        </div>
                        <div className={style.tracking_img}>
                            <img className={style.trackingfoto} src={trackingfoto} alt={trackingfoto} />
                        </div>
                    </div>
                    <div className={style.brand_info}>
                        <div className={style.first_brand}>
                            <img className={style.optitrack} src={optitrack} alt={optitrack} />
                            <p>Система, на которой создаются голливудские спецэффекты.</p>
                        </div>
                        <div className={style.second_brand}>
                            <img className={style.antilatency} src={antilatency} alt={antilatency} />
                            <p>Отечественная разработка для VR программ.</p>
                        </div>
                        <div className={style.third_brand}>
                            <img className={style.vivepro} src={vivepro} alt={vivepro} />
                            <p>Популярное решение для игр, обучения и презентаций.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.game_development}>
                <div className={style.game_development_container}>
                    <div className={style.text_development}>
                        <h1>Игровые разработки</h1>
                        <p>Основным игровым продуктом VROOM GAMES являются командные виртуальные квесты с уникальным сюжетом.</p>
                    </div>
                    <div className={style.development_photo}>
                        <img className={style.pyramid} src={pyramid} alt={pyramid} />
                        <img className={style.insects} src={insects} alt={insects} />
                        <img className={style.arena} src={arena} alt={arena} />
                    </div>
                    <div className={style.development_text}>
                        <img className={style.bg_development} src={bg_development} alt={bg_development} />
                        <img className={style.bg_development} src={bg_development} alt={bg_development} />
                        <img className={style.bg_development} src={bg_development} alt={bg_development} />
                    </div>
                    <div className={style.text_in_bg}>
                        <div className={style.first_text_bg}>
                            <h2>МИСТИЧЕСКАЯ ПИРАМИДА</h2>
                            <p>45-минутное приключение по мотивам фильмов «Мумия», «Индиана Джонс» и «Лара Крофт». Группа учёных отправляется исследовать тайны древней гробницы, сталкиваясь с коварными ловушками и потусторонними силами. Игрокам предстоит проявить смекалку, посоревноваться в меткости, преодолеть страх высоты и замкнутого пространства.</p>

                        </div>
                        <div className={style.second_text_bg}>
                            <h2>ВТОРЖЕНИЕ НАСЕКОМЫХ</h2>
                            <p>Захватывающая история в жанре Sci-Fi длительностью до 1,5 часов. Космические герои отправляются на далекую межзвёздную базу, превращенную кровожадными мутантами в гигантский улей. Телепортация, полеты и спецэффекты не имеют аналогов в индустрии, а сложный игровой процесс привлечет внимание самых опытных геймеров.</p>

                        </div>
                        <div className={style.third_text_bg}>
                            <h2>ARENA</h2>
                            <p>Динамическая турнирная игра для любителей Quake и других легендарных шутеров, в которой участники сражаются друг против друга на нескольких площадках. Предусмотрены различные виды оружия. Проект подходит для проведения киберспортивных мероприятий.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.and}>
                <h1>А так же…</h1>
                <div className={style.and_container}>

                    <div className={style.first_column_and}>
                        <div className={style.mobile_app}>
                            <h3>Мобильные приложения дополнительной реальности</h3>
                            <p>Мы разработали систему карточек для школьников и студентов со встроенным контентом, «оживающим» при наведении смартфона</p>
                            <ul>
                                <li>Трехмерная анимация со звуковым сопровождением</li>
                                <li>Взаимодействие карточек и встроенных объектов друг с другом</li>
                                <li>Возможность выпуска в виде изображений на страницах учебника</li>
                            </ul>
                        </div>
                        <div className={style.education}>
                            <h3>Обучающие разработки для производства</h3>
                            <p>Технологии позволяют обучать Ваших сотрудников, воссоздавая любой технологический процесс</p>
                            <ul>
                                <li>Имитация действий и внешних ситуаций, взаимодействие с объектом</li>
                                <li>Высокоточный перенос масштабов и габаритов в виртуальную реальность</li>
                                <li>Экономия средств на использование реальной материально-технической базы</li>
                            </ul>
                        </div>
                        <div className={style.conference}>
                            <h3>Конференции в виртуальной реальности</h3>
                            <p>Новый формат удаленной работы позволил нам создать самую удобную и функциональную среду для виртуальных совещаний</p>
                            <ul>
                                <li>Эффект присутствия в одном пространстве сотрудников из разных городов и стран</li>
                                <li>Встроенный планировщик задач, офисные программы, экран для презентаций</li>
                                <li>Распознание голоса с автоматическое ведение протокола каждой сессии</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.second_column_and}>
                        <img className={style.mobile} src={mobile} alt={mobile} />
                        <img className={style.educationfoto} src={educationfoto} alt={educationfoto} />
                        <img className={style.conferencefoto} src={conferencefoto} alt={conferencefoto} />

                    </div>
                </div>
            </section>
            <section className={style.office}>
                <div className={style.office_container}>

                    <div className={style.office_text}>
                        <img className={video} src={video} alt={video} />
                        <div className={style.text_in_block}>
                            <h1>Офис и демонстрационный зал VRoom Games</h1>
                            <p>Мы всегда рады видеть гостей, клиентов и партнеров в клубе Vroom Games в самом центре Санкт-Петербурга, на Литовском проспекте, д. 50 к 2. Здесь можно не только ознакомиться с нашими технологиями, но и приятно провести время в баре, за игрой в бильярд, настольный теннис и приставки.</p>
                        </div>
                    </div>
                    <div className={style.office_img}>
                        <img className={style.room} src={room} alt={room} />
                        <img className={style.roommiddle} src={roommiddle} alt={roommiddle} />
                        <img className={style.roombar} src={roombar} alt={roombar} />
                    </div>
                </div>
            </section>
            <section className={style.lower_block}>
                <div className={style.lower_container}>
                    <div className={style.blockes_lower}>
                        <h2>Будем рады сотрудничеству!</h2>
                        <h1>Наше предложение</h1>
                        <ul>
                            <li>Организация постановок и обслуживания компьютерной техники и VR систем</li>
                            <li>Разработка программного обеспечения любой сложности</li>
                            <li>Франшиза игрового заведения стоимостью от 3 млн. руб.«под ключ»</li>
                        </ul>
                        <h3>Контактный телефон: +7 (812) 920-50-80</h3>
                        <button className={style.block_lower_btn}>vroomgames.ru</button>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Game;