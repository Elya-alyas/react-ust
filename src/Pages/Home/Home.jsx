import React from 'react';
import style from './Home.module.css'
import AboutUs from './Components/AboutUs/AboutUs';
import Main from './Components/Main/Main';
import Contacts from './Components/Contacts/Contacts';
import Clients from './Components/Clients/Clients';
import OurServises from './Components/OurServises/OurServises';
import Portfolio from './Components/Portfolio/Portfolio';
import FAQ from './Components/FAQ/FAQ';
import OurAdvantages from './Components/OurAdvantages/OurAdvantages';

const Home = () => {
    return (
        <main>
            <Main />
            <AboutUs />
            <OurServises />
            <Portfolio />
            <OurAdvantages />
            <Clients />
            <Contacts />
            <FAQ />
        </main>
    );
};

export default Home;