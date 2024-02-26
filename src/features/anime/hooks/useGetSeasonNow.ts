import { createQuery } from "@tanstack/solid-query";
import getSeasonNow from "../services/getSeasonNow";

const useGetSeasonNow = (limit?: number) => {
  return createQuery(() => ({
    queryKey: ["season"],
    queryFn: () => getSeasonNow(limit),
  }));
};

export default useGetSeasonNow;
