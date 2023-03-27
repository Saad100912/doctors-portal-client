import React from "react";
import Review from "./Review";

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: "Winston Harry",
            location: "California",
            imgURL: "https://i.ibb.co/JB2cMSN/people1.png",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content there.",
        },
        {
            id: 2,
            name: "Mary Rogers",
            location: "South Carolina",
            imgURL: "https://i.ibb.co/zVGtpKC/people2.png",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content there.",
        },
        {
            id: 3,
            name: "Veronica Corey",
            location: "Colorado",
            imgURL: "https://i.ibb.co/ysMz4tF/people3.png",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content there.",
        },
    ];

    return (
        <div className="my-28 lg:mx-5">
            <div>
                <h4 className="text-secondary font-medium">Testimonials</h4>
                <h2 className="text-accent text-4xl">What Our Patients Says</h2>
            </div>
            <div className="lg:mx-16 mx-2 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
                    {reviewsData.map((reviewData) => (
                        <Review key={reviewData.id} data={reviewData}></Review>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
