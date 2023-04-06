import React from "react";

const AppointmentOption = ({ data }) => {
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
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary font-medium text-white">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
