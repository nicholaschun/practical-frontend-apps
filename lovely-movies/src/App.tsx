import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { getAllMovies } from "./services/movie-api";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import { useDebounce } from "./hooks/useDebounce"
import { Movie } from "./utils/types";



export default function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search)


  const updateSearch = useCallback((value: string) => {
   setSearch(value)
  }, [search])

  useEffect(() => {
    const filteredMovies = debouncedSearch.length > 0 ?  movies.filter((movie: Movie) => (movie.title.toLowerCase()).includes(debouncedSearch.toLowerCase())) : movies
    setFilteredMovies(filteredMovies)
  },[debouncedSearch, movies])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movies = await getAllMovies(1);
        setMovies(movies);
        setFilteredMovies(movies);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("---error getting movies", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="App p-5">
      <h1 className="text-[18px]">Lovely Movies</h1>

      <div>
        <Search 
          setSearchVal={(val: string) => updateSearch(val)}
        />
      </div>
      <br />
      {loading && <div>Feching movies...</div>}
      {search && <p>You are searching for ... {search}</p>}
      <div className="grid grid-cols-4 gap-10">
        {filteredMovies &&
          filteredMovies.map((movie: Movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
  );
}
