import React from "react";

const MiddleBanner = () => {
    return (
        <div className="my-28">
            <div className="hero lg:px-12">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/FmyHTwz/treatment.png"
                            className="lg:w-2/3 rounded-lg shadow-2xl"
                            alt="Teeth Treatment"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">
                            Exceptional Dental Care, On Your Terms
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque, exercitationem? Ducimus laborum est
                            earum? Ipsum exercitationem dolorem illo
                            necessitatibus minima!
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

export default MiddleBanner;
