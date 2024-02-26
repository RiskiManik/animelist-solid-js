import { createQuery } from "@tanstack/solid-query";
import getSeasonNow from "../services/getSeasonNow";

const useGetSeasonNow = () => {
  return createQuery(() => ({
    queryKey: ["season"],
    queryFn: getSeasonNow,
  }));
};

export default useGetSeasonNow;
