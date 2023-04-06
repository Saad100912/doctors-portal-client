import { format } from "date-fns";
import React from "react";

const BookingModal = ({
    date,
    selectedAppointmentOption,
    setSelectedAppointmentOption,
}) => {
    const { name, slots } = selectedAppointmentOption;
    const bookingDate = new Date();

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phoneNumber.value;
        const date = form.date.value;
        const slot = form.selectedSlot.value;
        const bookingData = {
            appointmentName: name,
            appointmentDate: date,
            slot,
            bookingDate,
            patientName,
            email,
            phone,
        };
        setSelectedAppointmentOption(null);
        console.log(bookingData);
    };

    return (
        <>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3"
                    >
                        <input
                            name="date"
                            type="text"
                            className="input input-bordered w-full"
                            value={format(date, "PPPP")}
                            disabled
                        />
                        <select
                            name="selectedSlot"
                            className="select select-bordered w-full"
                        >
                            {slots &&
                                slots.map((slot, i) => (
                                    <option key={i} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-accent w-full"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
