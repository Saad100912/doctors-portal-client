import React from "react";

const MakeAppointment = () => {
    return (
        <div className="-mx-5 my-20 bg-[url('https://i.ibb.co/HNgxSZD/appointment.png')] bg-cover">
            <div className="hero">
                <div className="hero-content py-0 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                    <div className="hidden md:block">
                        <img
                            src="https://i.ibb.co/pfkMQBq/doctor-small.png"
                            className="lg:-mt-24"
                            alt="Doctor"
                        />
                    </div>
                    <div className="p-5 lg:p-0">
                        <h4 className="text-secondary font-medium text-lg">
                            Appointment
                        </h4>
                        <h1 className="text-4xl font-medium text-white my-4">
                            Make an appointment Today
                        </h1>
                        <p className="py-6 text-white">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary font-medium text-white">
                            Make Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
