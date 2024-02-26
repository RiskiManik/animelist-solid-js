import { baseUrl } from "../../../../env";
import { RootAnime } from "../types/animeTypes";

const getSeasonNow = async (limit?: number): Promise<RootAnime> => {
  const res = await fetch(`${baseUrl}/seasons/now?limit=${limit}`);
  const data: RootAnime = await res.json();

  return data;
};

export default getSeasonNow;
