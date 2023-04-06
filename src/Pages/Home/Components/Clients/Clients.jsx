import React from 'react';
import clients_style from './Clients.module.css'
import cinzano_logo from '../../../../assets/HomePage/cinzanoIcon.svg'
import atol_logo from '../../../../assets/HomePage/atolLogo.svg'
import mondoro_logo from '../../../../assets/HomePage/mondoroLogo.svg'
import vroom_logo from '../../../../assets/HomePage/vroomGamesLogo.svg'
import actual_logo from '../../../../assets/HomePage/actualLogo.svg'

const Clients = () => {
    return (
        <section className={clients_style.clients_section}>
            <h2 className={clients_style.title}>Клиенты</h2>
            <div className={clients_style.logos}>
                <img src={cinzano_logo} alt="Cinzano" />
                <img src={atol_logo} alt="Atol" />
                <img src={mondoro_logo} alt="Mondoro" />
                <img src={vroom_logo} alt="VroomGames" />
                <img src={actual_logo} alt="Актуаль" />
                <img src={cinzano_logo} alt="Cinzano" />
            </div>
            <div className={clients_style.logos} >
                <img src={actual_logo} alt="Актуаль" />
                <img src={cinzano_logo} alt="Cinzano" />
                <img src={atol_logo} alt="Atol" />
                <img src={mondoro_logo} alt="Mondoro" />
                <img src={cinzano_logo} alt="Cinzano" />
                <img src={vroom_logo} alt="VroomGames" />
            </div>
        </section>
    );
};

export default Clients;