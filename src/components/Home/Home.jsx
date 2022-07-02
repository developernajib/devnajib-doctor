import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Services from "./Services/Services";
import FeaturedService from "./Featured/FeaturedService";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
