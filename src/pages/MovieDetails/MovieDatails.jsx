import React, { Suspense, useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails, BASE_IMAGE_URL } from '../../components/API/API';
import './MovieDatails.css';
import { GoBack } from '..//../components/ButtonBack/buttonBack';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const formatReleaseDate = releaseDate => {
    const parts = releaseDate.split('-');
    const year = parts[0];
    return year;
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const details = await getMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <GoBack className="button_back" url={location.state?.from || '/'} />
      <div className="movie-details-content">
        <img
          className="img_moviedetails"
          src={`${BASE_IMAGE_URL}${movieDetails.poster_path}`}
          onError={e => {
            e.target.src = process.env.PUBLIC_URL + '/horse.jpg';
          }}
          alt={movieDetails.title}
          width={320}
        />
        <div className="text-details">
          <h2 className="movie-details-title">
            {movieDetails.original_title}
            <span className="date">
              {formatReleaseDate(movieDetails.release_date)}
            </span>
          </h2>
          <p className="info">
            <span className="info_view">Overview:</span> {movieDetails.overview}
          </p>
          <p className="info">
            <span className="info_view">User score: </span>
            {movieDetails.runtime}%
          </p>
          <p className="info">
            <span className="info_view">Rating: </span>
            {movieDetails.vote_average.toFixed(1)}
          </p>
          <p className="info">
            <span className="info_view">Genres:</span>
          </p>
          <span className="info_view-genres">
            {movieDetails.genres.map(({ name }) => name).join(', ') || 'None'}
          </span>
          <h2 className="add_information">Additional information</h2>
          <ul className="cast-info-review">
            <li className="cast-add-info">
              <NavLink
                to="cast"
                className="add-info"
                activeClassName="active"
                exact={true}
              >
                Cast
              </NavLink>
            </li>
            <li className="cast-add-info">
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
      {loading && <div>Loading...</div>}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
