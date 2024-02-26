import { baseUrl } from "../../../../env";
import { RootAnime } from "../types/animeTypes";

const getAnimeSearch = async (query: string) => {
  const res = await fetch(`${baseUrl}/anime?q=${query}`);
  const data: RootAnime = await res.json();
  return data;
};

export default getAnimeSearch;
