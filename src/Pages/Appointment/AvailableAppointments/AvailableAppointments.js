import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption.js";

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptionsData, setAppointmentOptionsData] = useState([]);

    useEffect(() => {
        fetch("appointmentOptionsData.json")
            .then((res) => res.json())
            .then((data) => setAppointmentOptionsData(data));
    }, []);
    return (
        <div className="my-28 mx-5">
            <div className="mb-10">
                <p className="flex justify-center text-secondary text-xl font-medium">
                    Available Appointments on {format(selectedDate, "PPPP")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {appointmentOptionsData.map((option) => (
                    <AppointmentOption key={option._id} data={option} />
                ))}
            </div>
        </div>
    );
};

export default AvailableAppointments;
