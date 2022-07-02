import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
const Service = [
    {
        name: "Fluoride Treatment",
        image: fluoride,
    },
    {
        name: "Cavity Filling",
        image: cavity,
    },
    {
        name: "Teeth Whitening",
        image: whitening,
    },
];
const Services = () => {
    return (
        <>
            <div className="container text-center my-5">
                <h6 style={{ color: "#1Cc7C1" }}>OUR SERVICES</h6>
                <h2>Services We Provide</h2>
            </div>
            <section className="d-flex justify-content-center mb-5">
                <div className="row w-75">
                    {Service.map((service) => (
                        <div className="col-md-4 text-center">
                            <img
                                style={{ height: "50px" }}
                                src={service.image}
                                alt="Service Icons"
                            />
                            <h5 className="mt-3 mb-3">{service.name}</h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Odio ducimus.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
