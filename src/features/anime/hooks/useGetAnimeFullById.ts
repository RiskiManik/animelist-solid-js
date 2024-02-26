import { createQuery } from "@tanstack/solid-query";
import getAnimeFullById from "../services/getAnimeFullById";

const useGetAnimeFullById = (id: number) => {
  return createQuery(() => ({
    queryKey: ["detail anime-", id],
    queryFn: () => getAnimeFullById(id),
  }));
};

export default useGetAnimeFullById;
