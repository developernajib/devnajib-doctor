import React from "react";
import {
    faClock,
    faMapMarker,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BusinessInfo.css";

const infosData = [
    {
        title: "Opening Hours",
        description: "We are open 7 days",
        icon: faClock,
        background: "primary",
    },
    {
        title: "Visit Our Location",
        description: "Brooklyn, New York",
        icon: faMapMarker,
        background: "dark",
    },
    {
        title: "Call Us",
        description: "+122-345-6789",
        icon: faPhone,
        background: "primary",
    },
];
const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="row w-75 margin-left-125">
                {infosData.map((info) => (
                    <div className="col-md-4">
                        <div
                            className={`d-flex justify-content-center info-${info.background}`}
                        >
                            <div className="info-icon mr-3">
                                <FontAwesomeIcon icon={info.icon} />
                            </div>
                            <div className="mt-2">
                                <h6>{info.title}</h6>
                                <small>{info.description}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessInfo;
