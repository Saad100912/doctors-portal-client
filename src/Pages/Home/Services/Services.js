import React from "react";
import Service from "./Service";

const Services = () => {
    const homeServicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nobis.",
            imgURL: "https://i.ibb.co/1K8K8HH/fluoride.png",
        },
        {
            id: 2,
            title: "Cavity Filling",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nobis.",
            imgURL: "https://i.ibb.co/cbgMhYd/cavity.png",
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nobis.",
            imgURL: "https://i.ibb.co/6P0pSNM/whitening.png",
        },
    ];

    return (
        <div className="my-28">
            <div className="text-center">
                <h4 className="text-secondary text-xl font-medium">
                    Our Services
                </h4>
                <h2 className="text-accent text-3xl">Services We Provide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-16">
                {homeServicesData.map((service) => (
                    <Service key={service.id} data={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
