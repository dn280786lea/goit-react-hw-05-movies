import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCredits } from '../API/API';
import {} from './Cast.css';

const Cast = () => {
  const { id } = useParams();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const credits = await searchCredits(id);
        setCastData(credits);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCastData();
  }, [id]);

  if (!castData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cast Information</h2>
      <ul className="cast-info">
        {castData.cast.map(actor => (
          <li className="class-info-character" key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
