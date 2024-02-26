import { baseUrl } from "../../../../env";

const getAnimeFullById = async (id: number) => {
  const res = await fetch(`${baseUrl}/anime/${id}/full`);
  const data = await res.json();
  return data;
};

export default getAnimeFullById;
