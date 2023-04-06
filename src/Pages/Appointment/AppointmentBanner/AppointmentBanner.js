import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <div className="hero min-h-[550px]">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-1 lg:order-2 lg:flex lg:justify-start">
                        <img
                            src="https://i.ibb.co/DwJwRFd/chair.png"
                            alt="dentist chair"
                        />
                    </div>
                    <div className="order-2 lg:order-1 flex justify-center">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            <p className="flex justify-center">
                You have selected date: {format(selectedDate, "PPPP")}
            </p>
        </div>
    );
};

export default AppointmentBanner;
