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

  const formatReleaseDate = releaseDate => {
    const parts = releaseDate.split('-');
    const year = parts[0];
    return year;
  };

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
    <div className="movie-details-container">
      <Link className="button_link" onClick={handleClick}>
        Go back
      </Link>
      <div className="movie-details-content">
        <img
          className="img_moviedetails"
          src={`${BASE_IMAGE_URL}${movieDetails.poster_path}`}
          onError={e => {
            e.target.src = process.env.PUBLIC_URL + '/horse.jpg';
          }}
          alt={movieDetails.title}
        />
        <div className="text-details">
          <span>
            <h2>
              {movieDetails.original_title}
              <span className="date">
                {formatReleaseDate(movieDetails.release_date)}
              </span>
            </h2>
          </span>
          <p className="info">
            <span className="info_view">Overview:</span> {movieDetails.overview}
          </p>
          <p className="info">
            <span className="info_view">User score: </span>
            {movieDetails.runtime}%
          </p>
          <p className="info">
            <span className="info_view">Genres:</span>
          </p>
          {movieDetails.genres.map(({ name }) => name).join(', ') || 'None'}
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink
                to="cast"
                className="add-info"
                activeClassName="active"
                exact={true}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className="add-info"
                activeClassName="active"
                exact={true}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
