import React from "react";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/r2SsD3L/bg.png')] bg-cover mb-20">
            <div className="hero min-h-[550px]">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-1 lg:order-2 flex justify-center">
                        <img
                            src="https://i.ibb.co/DwJwRFd/chair.png"
                            className="rounded-lg shadow-2xl"
                            alt="Dentist Chair"
                        />
                    </div>
                    <div className="order-2 lg:order-1">
                        <h1 className="text-5xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary font-medium text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
