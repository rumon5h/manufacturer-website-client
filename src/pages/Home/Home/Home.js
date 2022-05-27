import React from 'react';
import Benefits from '../Benefits/Benefits';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../../Reviews/Reviews';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Reviews></Reviews>
            <Benefits></Benefits>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;