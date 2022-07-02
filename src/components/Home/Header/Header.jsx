import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import BusinessInfo from "../BusinessInfo/BusinessInfo";

const Header = () => {
    return (
        <>
            <div className="header-container mb-5">
                <Navbar />
                <HeaderBanner />
                <BusinessInfo />
            </div>
        </>
    );
};

export default Header;
