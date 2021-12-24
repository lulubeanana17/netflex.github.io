import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Detail.css';

function Detail() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [suggest, setSuggest] = useState();
  const suggestMovie = () => {
    fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        setSuggest(json.data.movies);
        setLoading(false);
      });
  };
 
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movie);
        suggestMovie();
      });
  }, []);
  return (
    <div className="detail">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="movie">
          <div className="movieInfo">
            <img src={movie.large_cover_image} alt="" />
            <div className="movieSummary">
              <h1 className="movieTitle">{movie.title}</h1>
              <h3 className="movieYear">Year: {movie.year}</h3>
              <h3 className="movieRuntime">Runtime: {movie.runtime}</h3>
              <ul className="movieGenre">
                Genre: 
                {movie.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="movieContainer">
            <h1 className="suggestTitle">Suggested movies</h1>
            <div className="movieSuggest">
            {suggest.map((movie) => (
              <div className="movieSuggestdata">
                <Link
                  to={`/ic/${movie.id}`}
                  key={movie.id}
                  className="movieSuggestLink"
                >
                  <img src={movie.medium_cover_image} alt="suggest movie" />
                  <h1 className="suggestMovieTitle">{movie.title}</h1>
                </Link>
              </div>
            ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
