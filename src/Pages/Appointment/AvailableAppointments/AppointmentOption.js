import React from "react";

const AppointmentOption = ({ data, setSelectedAppointmentOption }) => {
    const { name, slots } = data;
    return (
        <div className="card">
            <div className="card-body text-center">
                <h2 className="text-secondary text-xl font-medium">{name}</h2>
                <p className="text-sm">
                    {slots.length === 0 ? "Try Another Day" : slots[0]}
                </p>
                <p className="text-sm">
                    {slots.length} {slots.length > 1 ? "Spaces" : "Space"}{" "}
                    Available
                </p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary font-medium text-white"
                        onClick={() => setSelectedAppointmentOption(data)}
                        disabled={slots.length === 0}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
