import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { name: "John Doe", text: "Amazing service! Highly recommended.", rating: 5 },
    { name: "Jane Smith", text: "Professional and trustworthy.", rating: 4.5 },
    { name: "Michael Lee", text: "Helped me grow my wealth significantly.", rating: 5 },
  ];

  return (
    <section className="reviews" id="reviews">
      <h2>What Our Clients Say</h2>
      <div className="reviews-carousel">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
            <p>Rating: {review.rating}⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
