import { useState, useEffect } from "react";
import "./App.css";
import Card from "./card";

// `http://www.omdbapi.com/?apikey=a4ed12c2&s=${query}

function App() {
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState("");
  
    const searchMovies = async (title) => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=a4ed12c2&s=${title}`
      );
      const data = await response.json();
      setMovies(data.Search);
    };
    useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="wrapper">
      <header>
        <h1>🍿movie time</h1>
        <input
          placeholder="search for.."
          value={q}
          type="search"
          onChange={(e) => {
            setQ(e.target.value);
          }}
        />
        <div className="icon" onClick={() => searchMovies(q)}>🔍</div>
        <p>found {movies.length} results</p>
      </header>

      {movies?.length > 0 ? (
        <div className="card-container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <h2>no movies found</h2>
      )}
    </div>
  );
}

export default App;
