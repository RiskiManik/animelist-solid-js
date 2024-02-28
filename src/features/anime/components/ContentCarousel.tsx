import { Component, For } from "solid-js";
import { Anime } from "../types/animeTypes";
import { FaSolidPlay, FaSolidStar } from "solid-icons/fa";
import { A } from "@solidjs/router";

const ContentCarousel = (props: { data: Anime | undefined }) => {
  return (
    <div class=" flex relative z-0 bg-base-200  w-full ">
      <div class="flex flex-col-reverse lg:flex-row  w-full lg:w-1/2  lg:pl-16 lg:pt-12 lg:mt-2 relative ">
        <div class="absolute lg:block bottom-0 left-0 bg-gradient-to-t from-zinc-800  to-transparent lg:bg-none   pt-32 pb-6 px-4 lg:pb-16 lg:pt-0 lg:mt-4 lg:pl-16  text-base-100 lg:text-base-content   w-full  lg:w-1/2 ">
          <div>
            <h1 class="text-xl lg:text-3xl font-semibold lg:font-bold">
              {props.data?.title}
            </h1>
            <p class="text-sm lg:font-medium lg:py-2 lg:text-primary-content/70 ">
              <For each={props.data?.genres}>
                {(genre) => <span>{genre.name},</span>}
              </For>
            </p>
            <div class="pt-0 pb-8">
              <p class="text-sm lg:text-base lg:font-medium">
                Status : <span class="text-success">{props.data?.status}</span>
              </p>
              <p class="text-sm lg:text-base  lg:font-medium">
                Aired : {props.data?.aired.from.slice(0, 10)}
              </p>
              <p class="text-sm lg:text-base  lg:font-medium flex  ">
                Score :{" "}
                <span class="text-warning ml-1">{props.data?.score}</span>
                <FaSolidStar class="text-warning mt-0.5 ml-0.5" />
              </p>
            </div>
            <p class="hidden  lg:text-base  font-normal lg:line-clamp-5 ">
              {props.data?.synopsis}
            </p>
            <button class="btn btn-outline btn-active btn-primary lg:btn-neutral btn-sm font-medium lg:mt-3 ">
              view more
            </button>
          </div>
        </div>
        <div class="w-full lg:w-1/2  lg:pl-12   lg:ml-72 lg:mt-3 ">
          <img
            src={props.data?.images.jpg?.image_url}
            class="w-full lg:w-52 object-cover"
            alt="Aime"
          />
          <p class="hidden lg:block text-sm underline  underline-offset-2 py-2 text-center pr-16">
            + Add to playlist
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 relative bg-neutral-content hidden lg:block">
        <img
          src={props.data?.trailer.images.large_image_url}
          class="w-full object-cover opacity-90"
          alt="Aime"
        />
        <div class="bg-info absolute top-0 left-12 px-6 w-44 py-4 rounded-br-full">
          <p class="text-info-content font-semibold text-lg ">Trailer Anime</p>
        </div>
        <A href={props.data?.trailer?.url || ""}>
          <FaSolidPlay
            size={60}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-info hover:text-info/30 "
          />
        </A>
      </div>
    </div>
  );
};

export default ContentCarousel;
