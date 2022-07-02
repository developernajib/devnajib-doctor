import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const AppointmentForm = ({ AppointmentName }) => {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    Modal.setAppElement("#root");

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button
                className="btn bg-primary text-uppercase"
                onClick={openModal}
            >
                Book Appointment
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="primary-text text-center">
                    {AppointmentName}
                    <div className="text-right">
                        <button onClick={closeModal} className="form-close">
                            X
                        </button>
                    </div>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="fullname">Full name</label>
                    <input
                        class="form-styling"
                        type="text"
                        name="fullname"
                        placeholder=""
                    />
                    <label for="email">Email</label>
                    <input
                        class="form-styling"
                        type="text"
                        name="email"
                        placeholder=""
                    />
                    <label for="age" style={{ width: "49%" }}>
                        Age
                    </label>
                    <label
                        for="weight"
                        className="ml-3"
                        style={{ width: "49%" }}
                    >
                        Weight
                    </label>
                    <input
                        class="form-styling mr-3"
                        type="number"
                        name="password"
                        placeholder=""
                        style={{ width: "49%" }}
                    />
                    <input
                        class="form-styling"
                        type="number"
                        name="password"
                        placeholder=""
                        style={{ width: "49%" }}
                    />
                    <br />
                    <label for="confirmpassword">Type Message</label>
                    <textarea
                        className="form-styling"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        style={{ height: "110px" }}
                    ></textarea>

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <br />
                    <input
                        className="btn bg-primary"
                        type="submit"
                        onClick={closeModal}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
