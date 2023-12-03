import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchRewie } from '../API/API';
import {} from './MovieReviews.css';

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await searchRewie(id);
        setReviews(reviewsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchReviews();
  }, [id]);

  if (!reviews) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className="reviews">
      <h2>Movie Reviews</h2>
      <ul>
        {reviews.results.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
