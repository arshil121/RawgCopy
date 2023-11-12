import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data?.map(
          (genre) =>
            // Ensure genre is defined before rendering
            genre && (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={`${genre.name} Background`}
                  />
                  <Button
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
                    colorScheme={
                      genre.id === selectedGenre?.id ? "red" : "normal"
                    }
                    onClick={() => onSelectGenre(genre)}
                    fontSize="lg"
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            )
        )}
      </List>
    </>
  );
};
