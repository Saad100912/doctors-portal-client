import React from "react";

const Service = ({ data }) => {
    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={data.imgURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
