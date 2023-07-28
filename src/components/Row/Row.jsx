import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../axios";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request)
    }

    fetchdata();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  const handleClick = (movie) => {
    if (videoId) {
      setVideoId("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setVideoId(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(movies)
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => {
          const { poster_path, backdrop_path, original_title } = movie;
          return (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
              alt={`${original_title}`}
            />
          );
        })}
      </div>
      <div style={{ padding: "5px" }}>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
