import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

export const GenreList = () => {
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
                  <Text fontSize="lg">{genre.name}</Text>
                </HStack>
              </ListItem>
            )
        )}
      </List>
    </>
  );
};
