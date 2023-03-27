import React from "react";

const Review = ({ data }) => {
    const { name, location, imgURL, review } = data;
    return (
        <div className="shadow-xl p-4 md:shadow-none md:p-0 rounded-xl">
            <div>
                <p>{review}</p>
            </div>
            <div className="flex mt-4">
                <div>
                    <img
                        src={imgURL}
                        alt="User"
                        className="w-2/3 ring-offset-2 ring-2 ring-primary rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h4 className="text-accent font-medium">{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
