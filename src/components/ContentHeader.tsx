interface ContentHeaderProps {
  genreTitle: string;
}

export function ContentHeader(props: ContentHeaderProps) {
  const { genreTitle } = props;

  return (
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>
)
}