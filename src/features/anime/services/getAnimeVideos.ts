import { baseUrl } from "../../../../env";

const getAnimeVideos = async (id: number) => {
  const res = await fetch(`${baseUrl}/anime/${id}/videos`);
  const data = await res.json();
  return data;
};

export default getAnimeVideos;
