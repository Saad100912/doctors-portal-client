import React from "react";

const InfoCard = ({ data }) => {
    return (
        <div className={`card lg:card-side ${data.bgColor} shadow-xl p-2`}>
            <div className="flex justify-center items-center mt-10 lg:mt-0 lg:ml-6">
                {data.icon}
            </div>
            <div className="card-body lg:block">
                <h2 className="card-title text-white">{data.name}</h2>
                <p className="text-white">{data.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
