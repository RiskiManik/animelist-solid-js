import { baseUrl } from "../../../../env";
import { RootAnime } from "../types/animeTypes";

const getSeasonNow = async (): Promise<RootAnime> => {
  const res = await fetch(`${baseUrl}/seasons/now`);
  const data: RootAnime = await res.json();

  return data;
};

export default getSeasonNow;
