import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookAppointment = ({ date }) => {
    const bookingData = [
        {
            id: 1,
            name: "Teeth Orthodonics",
            time: "08.00 AM - 09.00 AM",
            space: 10,
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            time: "09.00 AM - 10.00 AM",
            space: 8,
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            time: "10.00 AM - 11.00 AM",
            space: 9,
        },
        {
            id: 4,
            name: "Cavity Protection",
            time: "11.00 AM - 12.00 PM",
            space: 5,
        },
        {
            id: 5,
            name: "Pediatric Dental",
            time: "06.00 PM - 07.00 PM",
            space: 10,
        },
        {
            id: 6,
            name: "Oral Surgery",
            time: "07.00 PM - 08.00 PM",
            space: 10,
        },
    ];
    return (
        <>
            <div className="container">
                <h2 className="text-center primary-text mb-5 primary-text">
                    Available Appointment on, {date.toDateString()}
                </h2>
                <div className="row">
                    {bookingData.map((bookingData) => (
                        <div className="col-md-4 mb-5" key={bookingData.id}>
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <h4 className="card-title primary-text">
                                        {bookingData.name}
                                    </h4>
                                    <h6>{bookingData.time}</h6>
                                    <p>{bookingData.space} Spaces Available</p>
                                    <AppointmentForm
                                        AppointmentName={bookingData.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BookAppointment;
