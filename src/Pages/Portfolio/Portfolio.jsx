import React from "react";
import style from "./Portfolio.module.css";
import main_img from "../../assets/assets-portfolio/main.png";
import inner_titles from "../../assets/assets-portfolio/Cont.png";
import fisrt_img from "../../assets/assets-portfolio/image.png";
import second_img from "../../assets/assets-portfolio/phone_photo.png";
import third_img from "../../assets/assets-portfolio/atol.png";
import fourth_img from "../../assets/assets-portfolio/three_photo.png";
import last_img from "../../assets/assets-portfolio/laptop.png";
import orange_img from "../../assets/assets-portfolio/orange.png";
import map_img from "../../assets/assets-portfolio/map.png";
import cinzano_img from "../../assets/assets-portfolio/cinzano.png";
import atol_icon from "../../assets/assets-portfolio/Atol_icon.png";
import mondoro_icon from "../../assets/assets-portfolio/mondoro.png";
import games_icon from "../../assets/assets-portfolio/games.png";
import actual_icon from "../../assets/assets-portfolio/Actual.png";
import coffees_icon from "../../assets/assets-portfolio/coffee.png";

const Portfolio = () => {
  return (
    <div className={style.main_container}>
      <div className={style.menu}>
        <img className={style.main_img} src={main_img} alt="img" />
        <h1 className={style.main_name}>Портфолио</h1>
        <p className={style.paragraph}>
          Мы можем разработать для вас любое индивидуальное решение. Наша
          компания обладает широкими возможностями для успешного создания
          технически-сложных систем.
        </p>
        <button className={style.btn_btn2}>Заказать проект</button>
      </div>
      {/* //////////// */}
      <div className={style.second_item}>
        <div className={style.inner_box}>
          <div className={style.first_column}>
            <div className={style.inner_column}>
              <img src={fisrt_img} alt="fisrt_img" />
              <h5>Прораб-x</h5>
              <p>Мобильное приложение для строителей</p>
            </div>
            <div className={style.inner_column}>
              <img src={third_img} alt="fisrt_img" />
              <h5>ATOL-бонус</h5>
              <p>Мобильное приложение для профессионалов</p>
            </div>
          </div>
          <div className={style.second_column}>
            <div className={style.second_inner_column}>
              <img src={second_img} alt="second_img" />
              <h5>Голосовой помошник </h5>
              <p>Сервис для работы со списками задач</p>
            </div>
            <div className={style.second_inner_column}>
              <img src={fourth_img} alt="second_img" />
              <h5>Vroomgames</h5>
              <p>Сервис для работы со списками заказов</p>
            </div>
          </div>
          <div className={style.third_column}>
            <div className={style.second_inner_column}>
              <img src={orange_img} alt="second_img" />
              <h5>Промо-система Cinzano </h5>
              <p>Сервис для работы со списками заказов</p>
            </div>
            <div className={style.second_inner_column}>
              <img src={map_img} alt="second_img" />
              <h5>Vroomgames</h5>
              <p>Сервис для работы со списками заказов</p>
            </div>
          </div>
          <div className={style.last_column}>
            <div className={style.last_column}>
              <div className={style.last_inner_column}>
                <img src={last_img} alt="last_img" />
                <h5>Актуаль</h5>
                <p>Сайт промо игры</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div>
        <div className={style.clients}>
          <h2 className={style.clients_title}>Клиенты</h2>
          <div className={style.clients_icons}>
            <div className={style.clients_icons_block}>
              <img src={cinzano_img} alt="icons" />
              <img src={atol_icon} alt="icons" />
              <img src={mondoro_icon} alt="icons" />
              <img src={games_icon} alt="icons" />
              <img src={actual_icon} alt="icons" />
              <img src={cinzano_img} alt="icons" />
            </div>
            <div className={style.clients_icons_block2}>
              <img src={actual_icon} alt="icons" />
              <img src={cinzano_img} alt="icons" />
              <img src={atol_icon} alt="icons" />
              <img src={mondoro_icon} alt="icons" />
              <img src={cinzano_img} alt="icons" />
              <img src={games_icon} alt="icons" />
            </div>
          </div>
        </div>
      </div>
      {/* connection with us */}
      <div className={style.cof}>
        <div className={style.coffee_img}>
          {/* <img  src={coffees_icon} alt="icon" /> */}

          <div className={style.title_part}>
            <h4 className={style.idea}>Есть идея?</h4>
            <h1 className={style.contact_with_us}>Свяжитесь с нами</h1>
            <p className={style.p}>
              У вас есть уже существующий проект, который вы хотите
              усовершенствовать? Вы хотите воплотить в жизнь смелую идею, но вам
              нужна помощь? Или вы вообще не знаете, с чего начать реализацию
              проекта?
            </p>
            <button className={style.btn_btn3}>Заказать проект</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
