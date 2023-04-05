import React from 'react';
import our_pro from './Services.module.css'
import sec1_1 from '../../assets/services/foto_Azat/section1_foto1.png'
import sec1_2 from '../../assets/services/foto_Azat/section1_foto2.png'
import sec1_3 from '../../assets/services/foto_Azat/section1_foto3.png'
import sec1_arr_left from '../../assets/services/foto_Azat/section1_arrow-left.png'
import sec1_arr_right from '../../assets/services/foto_Azat/section1_arrow-right.png'
import sec1_points from '../../assets/services/foto_Azat/section1_points.png'
import sec2_1 from '../../assets/services/foto_Azat/section2_foto1.png'
import sec2_2 from '../../assets/services/foto_Azat/section2_foto2.png'
import sec2_3 from '../../assets/services/foto_Azat/section2_foto3.png'
import sec2_4 from '../../assets/services/foto_Azat/section2_foto4.png'
import sec2_5 from '../../assets/services/foto_Azat/section2_foto5.png'
import sec2_6 from '../../assets/services/foto_Azat/section2_foto6.png'
import sec3_arrow from '../../assets/services/foto_Azat/section3_arrow.png'
import sec3_1 from '../../assets/services/foto_Azat/section3_foto11.png'
import sec3_2 from '../../assets/services/foto_Azat/section3_foto21.png'
import sec3_5 from '../../assets/services/foto_Azat/section3_foto32.png'
import sec3_6 from '../../assets/services/foto_Azat/section3_foto33.png'
import sec4_1 from '../../assets/services/foto_Azat/section4_foto1.png'
import sec4_2 from '../../assets/services/foto_Azat/section4_foto2.png'
import sec4_3 from '../../assets/services/foto_Azat/section4_foto3.png'
import sec4_4 from '../../assets/services/foto_Azat/section4_foto4.png'
import sec4_5 from '../../assets/services/foto_Azat/section4_foto5.png'
import sec4_6 from '../../assets/services/foto_Azat/section4_foto6.png'
import Service from './ServicesComponents/Service/Service';
import AdditionServUp from './ServicesComponents/AdditionalServices/AdditionalServicesUp/AdditionServUp';
import AdditionServDown from './ServicesComponents/AdditionalServices/AdditionalServices Down/AdditionServDown';
import Cooperation from './ServicesComponents/Cooperation/Cooperation';
import Numbers from './ServicesComponents/Numbers/Numbers';



const Services = () => {
  return (
    <div>
			<div className={our_pro.projects}>
				<div className={our_pro.container}>
					<div className={our_pro.our}>
						<div><h2>Как мы выполняем</h2></div>
						<div><h1>Наши проекты</h1></div>
						<div><p>Мы осуществляем технологическую и бизнес-трансформацию, используя методологию Agile, проверенные на практике платформы для организации совместной работы с заказчиком, передовые инструменты для разработки, многопрофильные команды специалистов с различными навыками и распределенную глобальную модель оказания услуг.</p></div>
           <button>Заказать проект</button>
          </div>
			  </div>
			</div>
			<div className={`${our_pro.cooperation} ${our_pro.container}`}>
				<div className={our_pro.cooper_first}>
          <h2>Сотрудничество</h2>
				  <h1>С учетом ваших потребностей</h1>
				</div>
				<div className={our_pro.cooper_second}>
					<img className={our_pro.arrLeft} src={sec1_arr_left} alt="arrow_left" />
					<img className={our_pro.arrRight} src={sec1_arr_right} alt="arrow_left" />
					<img className={our_pro.points} src={sec1_points} alt="middle_points" />
					<Cooperation img={sec1_1} name='Быстрое масштабирование' text='Мы управляем каждым проектом так, чтобы помочь вам быстро масштабировать бизнес-решения и соответствовать изменениям в потребностях клиентов вне зависимости от региона, часового пояса или требующейся функциональности.' />
					<Cooperation img={sec1_2} name='Прозрачное взаимодействие' text='Ваши результаты — основа нашего успеха. Мы используем новейшие технологии, нструменты и платформы для совместной работы, чтобы гарантировать прозрачность взаимодействия и возможность контролировать его из любой точки мира.' />
					<Cooperation img={sec1_3} name='Смешанные команды' text='Для создания цифрового опыта или продукта требуются экспертный опыт и знания специалистов по различным предметным областям. Мы создаем многопрофильные команды для разработки комплексных технологических решений, которые помогут вам добиться необходимых результатов.'/>
				</div>
			</div>
			<div className={our_pro.backgr}>
        <div className={`${our_pro.services} ${our_pro.container}`}>
				  <div className={our_pro.services_first}>
            <h2>Полный спектр</h2>
				    <h1>Наших услуг</h1>
				  </div>
				  <div className={our_pro.wrapImg}>
						<Service foto={sec2_1} text='Анализируем' />
						<Service foto={sec2_2} text='Прототипируем' />
						<Service foto={sec2_3} text='Дизайним' />
						<Service foto={sec2_4} text='Программируем' />
						<Service foto={sec2_5} text='Тестируем' />
						<Service foto={sec2_6} text='Поддерживаем' />
				  </div>
			  </div>
			</div>
			<div className={`${our_pro.numbers} ${our_pro.container}`}>
				<Numbers num={1} name1='Анализируем' text='Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.' name2='Мы анализировали, когда делали проект для:' img1={sec3_1} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
				<Numbers num={2} name1='Прототипируем' text='Прорабатываем пользовательские сценарии, проектируем логику приложения, скечируем основные экраны.' name2='Мы прототипировали, когда делали проект для:' img1={sec3_2} img2={sec3_1} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
				<Numbers num={3} name1='Дизайним' text='Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы.' name2='Мы создавали дизайн, когда делали проект для:' img1={sec3_2} img2={sec3_5} img3={sec3_6} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
				<Numbers num={4} name1='Программируем' text='Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.' name2='Мы прогаммировали, когда делали проект для:' img1={sec3_2} img2={sec3_5} img3={sec3_1} img4={sec3_6} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
				<Numbers num={5} name1='Тестируем' text='Проводим ручное функциональное тестирование и пишем UI-автотесты. Готовим чек-листы и тест-кейсы, и пишем UI-автотесты.' name2='Мы тестировали, когда делали проект для:' img1={sec3_5} img2={sec3_1} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
				<Numbers num={6} name1='Поддерживаем' text='Работаем по SLA. Следим за стабильностью работы приложения, обновляем под новые устройства и версии iOS и Android.' name2='Мы предоставляем поддержку:' img1={sec3_2} name3='Можем пройти весь путь или выполнить только этот этап.' a='Начать работу' img5={sec3_arrow} />
			</div>
			<div className={our_pro.additionalServices_bg}>
				<div className={`${our_pro.additionalServices} ${our_pro.container}`}>
					<h1>Дополнительные услуги</h1>
					<div className={our_pro.firstLine}>
					  <AdditionServUp img={sec4_1} name='Разработка чат-ботов' />
					  <AdditionServUp img={sec4_3} name='AR/VR' />
					  <AdditionServUp img={sec4_5} name='Разработка мобильных игр' />
					</div>
					<div className={our_pro.secondLine}>
					  <AdditionServDown img={sec4_2} name='Составление технического задания' />
					  <AdditionServDown img={sec4_4} name='Серверная разработка' />
					  <AdditionServDown img={sec4_6} name='Аутсорсинг'/>
					</div>
			  </div>
			</div>
			<div className={our_pro.discuss1}>
				<div className={our_pro.container1}>
					<div className={our_pro.discuss1_text}>
						<div><h2>Обсуждаем</h2></div>
						<div><h1>Ваш проект</h1></div>
						<div><p>Если вы хотите стать частью нашей команды, оставьте свои контакты и мы свяжемся с вами!</p></div>
				  </div>
				</div>
			</div>
			<div className={our_pro.discuss2}>
				<div className={our_pro.discuss2_1}>
					<div className={our_pro.discuss2_11}>
						<h2>Персональная информация</h2>
						<p>Расскажите, как к вам обращаться и как можно связаться с вами</p>
					</div>
					<div className={our_pro.discuss2_12}>
						<input placeholder='Имя*' type="text" />
						<input placeholder='Компания*' type="text" />
						<input placeholder='Электронная почта*' type="text" />
						<input placeholder='Телефон*' type="text" />
					</div>
				</div>
				<div className={our_pro.discuss2_2}>
					<div className={our_pro.discuss2_21}>
						<h2>Техническое задание</h2>
						<p>Загрузите сюда свое ТЗ и / или оформите бриф</p>
					</div>
					<div className={our_pro.discuss2_22}>
						<button>Оформить бриф</button>
						<input placeholder='Ссылка на Техническое задание' type="text" />
					</div>
				</div>
				<div className={our_pro.discuss2_3}>
					<div className={our_pro.discuss2_31}>
						<h2>О проекте</h2>
					</div>
					<div className={our_pro.discuss2_32}>
						<textarea placeholder='Что бы Вы хотели рассказать еще о своем проекте' name="text" id="" cols="62" rows="6"></textarea>
						<div className={our_pro.discuss2_33}>
							<p>Ваши персональные данные обрабатываются в соответствии с нашей</p>
							<a href="#">Политикой конфидециальности</a>
						</div>
					</div>
				</div>
				<div className={our_pro.discuss2_4}>
					<div></div>
					<div className={our_pro.discuss2_42}>
						<h3>* обязательные поля для заполнения</h3>
						<button>Подать заявку</button>
					</div>
				</div>
			</div>
    </div>
  );
};

export default Services;