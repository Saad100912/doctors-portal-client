import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="mx-5">
            <Banner />
            <InfoCards />
            <Services />
            <MiddleBanner />
        </div>
    );
};

export default Home;
