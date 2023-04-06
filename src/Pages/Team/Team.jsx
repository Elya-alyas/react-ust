import React from 'react';
import style from './Team.module.css'
import fone from '../../assets/assets-team/fone_team.png'
import person_one from '../../assets/assets-team/employee.png'
import person_two from '../../assets/assets-team/empoloyee_two.png'
import person_three from '../../assets/assets-team/employee_three.png'
import person_four from '../../assets/assets-team/employee_four.png'
import person_five from '../../assets/assets-team/employee_five.png'
import person_six from '../../assets/assets-team/employee_six.png'
import person_seven from '../../assets/assets-team/employee_seven.png'
import person_eight from '../../assets/assets-team/employee_eight.png'
import person_end from '../../assets/assets-team/employee_end.png'




const Team = () => {
    return (

        <div className={style.main_block}>
            <img className={style.img} src={fone} alt="" />
            <div className={style.container}>
                <h4 className={style.headline} >Будем знакомы</h4>
                <h1 className={style.title}>Команда UST</h1>
                <p className={style.section} >Мы обеспечиваем развитие интеллектуального потенциала
                    компании, способствуем профессиональному росту наших
                    сотрудников. Работаем в России и странах Европы.
                    Мы создаем достойные условия труда и строго соблюдаем
                    законы, регулирующие отношения между компанией, работниками
                    и государством.</p>
            </div>
            <div className={style.one_block}>
                <div className={style.two_block}>
                    <div className={style.three_block}>
                        <h2 className={style.text}>Команда, ориентированная на людей</h2>
                        <p className={style.description}>В команде нашей компании работают высококвалифицированные
                            IT-специалисты, которые обладают не только качественными
                            знаниями, но и бесценным опытом в разработке инновационных
                            продуктов. Самое главное - каждый из них влюблен в то,
                            что делает. Вы можете познакомиться с каждым участником нашей
                            команды чуть ближе. </p>
                        <img className={style.person_one} src={person_one} alt="" />
                        <h6 className={style.name_one} >Николай шпаков</h6>
                        <p className={style.name_two}>Исполнительный директор</p>
                        <img className={style.person_two} src={person_two} alt="" />
                        <h6 className={style.name_three}>Олег Науменко</h6>
                        <p className={style.name_four}>СТО</p>
                        <img className={style.person_three} src={person_three} alt="" />
                        <h6 className={style.name_five} >Дмитрий Ершов</h6>
                        <p className={style.name_six} >Руководитель группы IOS</p>
                        <img className={style.person_four} src={person_four} alt="" />
                        <h6 className={style.name_seven} >Ярослав фомин</h6>
                        <p className={style.name_eight} >Специалист по подбору талантов</p>
                        <img className={style.person_nine} src={person_five} alt="" />
                        <h6 className={style.name_ten} >Елена горюнова</h6>
                        <p className={style.name_eleven} >Руководитель группы дизайнеров</p>
                        <img className={style.person_twelve} src={person_six} alt="" />
                        <h6 className={style.name_thirteen} >Ярослав фомин</h6>
                        <p className={style.name_fourteen} >Руководитель группы контроля качества</p>
                        <img className={style.person_fifteen} src={person_seven} alt="" />
                        <h6 className={style.name_sixteen} >Николай шпаков</h6>
                        <p className={style.name_seventeen} >Управляющий делами</p>
                        <img className={style.person_eighteen} src={person_eight} alt="" />
                        <h6 className={style.name_nineteen} >Ольга науменко</h6>
                        <p className={style.name_twenty} >Руководитель группы Android</p>
                    </div>
                    <div className={style.person_team}>
                        <img className={style.person_end} src={person_end} alt="" />
                        <h4 className={style.name_summary} >Открытые позиции</h4>
                        <h1 className={style.name_join} >Присоединяйтесь к нам</h1>
                        <button className={style.name_btn} >Узнать больше</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Team;