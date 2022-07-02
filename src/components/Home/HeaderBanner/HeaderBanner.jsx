import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
    return (
        <div className="container">
            <main
                style={{ height: "75vh" }}
                className="row d-flex align-items-center"
            >
                <div className="col-md-4">
                    <h1>
                        Your New Smile <br />
                        Starts Here
                    </h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto, quisquam nam consectetur aliquid quos soluta.
                    </p>
                    <a
                        href="/appointment"
                        className="btn btn-primary text-uppercase"
                    >
                        Get Appointment
                    </a>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img src={chair} alt="Header" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;
