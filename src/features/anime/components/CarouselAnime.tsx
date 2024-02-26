import { Component, For, Match, Suspense, Switch } from "solid-js";
import {
  Slider,
  SliderButton,
  SliderProvider,
  createSlider,
} from "solid-slider";
import {
  RiArrowsArrowLeftSLine,
  RiArrowsArrowRightSLine,
} from "solid-icons/ri";
import ContentCarousel from "./ContentCarousel";
import useGetSeasonNow from "../hooks/useGetSeasonNow";
import { Anime } from "../types/animeTypes";

const CarouselAnime: Component = () => {
  const anime = useGetSeasonNow(6);

  return (
    <SliderProvider>
      <SliderButton
        class="absolute left-0 top-1/2 z-20 p-4 bg-primary/30 hover:bg-primary/90 drop-shadow  rounded-r-full"
        prev
      >
        <RiArrowsArrowLeftSLine size={52} color="#fffeff" />
      </SliderButton>
      <Slider options={{ loop: true }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Match when={anime.isError}>
              <span>Error</span>
            </Match>
            <Match when={anime}>
              <For each={anime.data?.data}>
                {(data) => (
                  <div class="w-full">
                    <ContentCarousel data={data} />
                  </div>
                )}
              </For>
            </Match>
          </Switch>
        </Suspense>
      </Slider>
      <SliderButton
        class="absolute right-0 top-1/2 z-20 p-4 bg-primary/30 hover:bg-primary/90 drop-shadow rounded-l-full"
        next
      >
        <RiArrowsArrowRightSLine size={52} color="#fffeff" />
      </SliderButton>
    </SliderProvider>
  );
};

export default CarouselAnime;
