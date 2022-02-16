import { Movies } from "./Movies";

export function Movielist({ movies }) {
  console.log(movies)
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, Movie_pic },index) => (
        <Movies
        key={index}
          name={name}
          rating={rating}
          summary={summary}
          Movie_pic={Movie_pic} index={index} />
      ))}
    </section>
  );
}
