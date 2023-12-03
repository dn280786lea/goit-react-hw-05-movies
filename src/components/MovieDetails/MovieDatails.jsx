import React, { Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  NavLink,
  Outlet,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import { getMovieDetails, BASE_IMAGE_URL } from '../API/API';
import {} from './MovieDatails.css';
import Cast from '../Cast/Cast';

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
          src={`${BASE_IMAGE_URL}${
            movieDetails.poster_path ||
            '../img/istockphoto-1439973604-1024x1024.jpg'
          }`}
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
            <p>
              <p className="info">
                <span className="info_view">Genres:</span>
              </p>
              {movieDetails.genres.map(({ name }) => name).join(', ') || 'None'}
            </p>
          </p>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink
                to="cast"
                className="add-info"
                activeclassname="active"
                exact
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="add-info"
                to="reviews"
                activeclassname="active"
                exact
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
      <Routes>
        <Route path="cast" element={<Cast movieId={id} />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
