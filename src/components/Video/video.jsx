import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieVideo } from '../API/API';
import {} from './video.css';

const Movie = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const response = await getMovieVideo(id);
        setVideos(response.results);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieVideos();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!videos || videos.length === 0) {
    return <div>No videos found for this movie.</div>;
  }
  const firstVideo = videos[0];
  return (
    <div className="movie-container">
      <iframe
        className="video-player"
        title={firstVideo.name}
        src={`https://www.youtube.com/embed/${firstVideo.key}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Movie;
