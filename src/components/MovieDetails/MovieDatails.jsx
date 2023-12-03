import React, { Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  NavLink,
  Outlet,
  Link,
} from 'react-router-dom';
import { getMovieDetails, BASE_IMAGE_URL } from '../API/API';
import {} from './MovieDatails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link onClick={handleClick}>Go back</Link>
      <span>
        <h2>{movieDetails.original_title}</h2>
        <p>{movieDetails.release_date}</p>
      </span>
      <img
        className="img_moviedetails"
        src={`${BASE_IMAGE_URL}${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>Overview: {movieDetails.overview}</p>
      <p>User score: {movieDetails.runtime}%</p>
      <p>{movieDetails.release_date}</p>

      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast" activeClassName="active" exact>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" activeClassName="active" exact>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
