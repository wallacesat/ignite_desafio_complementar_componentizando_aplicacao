import { MovieCard } from '../components/MovieCard';
import { ContentHeader } from '../components/ContentHeader';

import { GenreResponseProps, MovieProps } from '../App';

import '../styles/content.scss';

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  const { movies, selectedGenre } = props;

  return (
    <div className="container">
      <ContentHeader genreTitle={selectedGenre.title}/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}