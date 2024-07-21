import { Movie } from "../utils/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div>
      <div>
        <img src={movie.url} alt={movie.title} />
      </div>
      <h2>{movie.title}</h2>
    </div>
  );
}
