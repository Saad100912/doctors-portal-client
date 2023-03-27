import React from "react";

const HomeContact = () => {
    return (
        <div className="text-center mb-10 md:my-28 bg-[url('https://i.ibb.co/HNgxSZD/appointment.png')] bg-cover py-12 -mx-5">
            <div className="mb-10">
                <h4 className="text-primary font-medium text-lg">Contact Us</h4>
                <h2 className="text-white font-medium text-4xl">
                    Stay Connected With Us
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center mx-2">
                <input
                    type="text"
                    placeholder="Email Address"
                    className="input w-full max-w-xs my-2"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="input w-full max-w-xs my-2"
                />
                <textarea
                    className="textarea w-full max-w-xs h-28 my-2"
                    placeholder="Your message"
                ></textarea>
                <button className="btn btn-primary px-8 bg-gradient-to-r from-secondary to-primary font-medium text-white mt-5">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default HomeContact;
