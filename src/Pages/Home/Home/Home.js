import React from "react";
import Banner from "../Banner/Banner";
import HomeContact from "../HomeContact/HomeContact";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="mx-5">
            <Banner />
            <InfoCards />
            <Services />
            <MiddleBanner />
            <MakeAppointment />
            <Reviews />
            <HomeContact />
        </div>
    );
};

export default Home;
