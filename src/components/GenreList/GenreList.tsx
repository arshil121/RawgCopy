import useGenres from "../../hooks/useGenre";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};
