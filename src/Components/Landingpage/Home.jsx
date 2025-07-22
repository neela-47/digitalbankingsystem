import React from 'react';
import Features from './Features';
import AllProducts from './AllProducts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;