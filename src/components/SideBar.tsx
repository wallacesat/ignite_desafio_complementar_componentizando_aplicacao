import { Button } from './Button';

import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

interface SideBarProps {
  handleClickButton: (genreId: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar(props: SideBarProps) {
  const {
    genres,
    handleClickButton,
    selectedGenreId
  } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}