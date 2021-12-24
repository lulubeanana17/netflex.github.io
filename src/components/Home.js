import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  let i = 0;
  const [loading, setLoading] = useState(true);
  const [genresLoading, setGenresLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [recommandMovies, setRecommandMovies] = useState();
  const transformMove = (num) => {
    if(window.innerWidth < 426) {
      document.querySelector(".mainShowcase").style.transform = `translate(${
        num * -100
      }vw)`;
    } else if(window.innerWidth < 769) {
      document.querySelector(".mainShowcase").style.transform = `translate(${
        num * -33
      }vw)`;
    } else {
      document.querySelector(".mainShowcase").style.transform = `translate(${
        num * -25
      }vw)`;
    }
  };
  const onLeft = (event) => {
    event.preventDefault();
    if(window.innerWidth < 426) {
      if (i < 1) {
        i = 14;
      } else {
        i = i - 1;
      }
    } else if(window.innerWidth < 769) {
      if (i < 1) {
        i = 12;
      } else {
        i = i - 1;
      }
    } else {
      if (i < 1) {
        i = 11;
      } else {
        i = i - 1;
      }
    }
    transformMove(i);
  };
  const onRight = (event) => {
    event.preventDefault();
    if(window.innerWidth < 426) {
      if (i > 13) {
        i = 0;
      } else {
        i = i + 1;
      }
    } else if(window.innerWidth < 769) {
      if (i > 11) {
        i = 0;
      } else {
        i = i + 1;
      }
    } else {
      if (i > 10) {
        i = 0;
      } else {
        i = i + 1;
      }
    }
    transformMove(i);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`https://yts.mx/api/v2/list_movies.json?genre=${inputValue}&limit=50`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data.movies);
      });
    document.querySelector(".searchGenre").value = "";
    setGenresLoading(false);
  };
  const onChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&limit=15")
      .then((res) => res.json())
      .then((data) => {
        setRecommandMovies(data.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <div className="body">
      <h1 className="sectionOneTitle">Hall of fame</h1>
      <div className="mainShowcase">
        {loading ? (
          null
        ) : (
          recommandMovies.map((movie) => (
            <div className="movieBox">
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="movieLink"
              >
                <img
                  className="movieImage"
                  src={movie.medium_cover_image}
                  alt="movieImage"
                />
                <h1 className="movieTitle">{movie.title}</h1>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="arrowMove">
        <button onClick={onLeft} className="moveLeft">
          ◀
        </button>
        <button onClick={onRight} className="moveRight">
          ▶
        </button>
      </div>
      <h1 className="sectionTwoTitle">Movies by genres</h1>
      <div className="movieByGenres">
        <form onSubmit={onSubmit}>
          <input
            className="searchGenre"
            onChange={onChange}
            type="text"
            placeholder="write genre"
          />
        </form>
        {genresLoading ? (
          <div className="genresEmpty">
            <p>We will show lots of movies by genres :)</p>
          </div>
        ) : (
          <div className="genreContainer">
            {movies.map((movie) => (
              <div className="movieGenreBox">
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="movieLink"
                >
                  <img
                    className="movieGenreImage"
                    src={movie.medium_cover_image}
                    alt="movieImage"
                  />
                  <h1 className="movieGenreTitle">{movie.title}</h1>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
