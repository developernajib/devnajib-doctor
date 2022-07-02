import React from "react";
import Calendar from "react-calendar";
import chair from "../../../images/chair.png";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <div className="container" style={{ height: "95vh" }}>
            <main
                style={{ height: "75vh" }}
                className="row d-flex align-items-center"
            >
                <div className="col-md-4 mb-2">
                    <h1>Appointment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img src={chair} alt="Header" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;