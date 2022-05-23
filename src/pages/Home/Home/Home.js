import React from 'react';
import Benefits from '../Benefits/Benefits';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    );
};

export default Home;