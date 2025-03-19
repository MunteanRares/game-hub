import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  sortOrder: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.slug,
        platforms: selectedPlatform?.id,
        ordering: sortOrder,
      },
    },
    [selectedGenre?.slug, selectedPlatform?.id, sortOrder]
  );

export default useGames;
