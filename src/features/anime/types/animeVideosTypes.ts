import { Images } from "./images";
import { Trailer } from "./props";

export interface AnimeVideo {
  promo: Promo[];
  episodes: Episode[];
  music_videos: MusicVideo[];
}

export interface Promo {
  title: string;
  trailer: Trailer;
}
export interface ImagesPromo {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface Episode {
  mal_id: number;
  url: string;
  title: string;
  episode: string;
  images: Images;
}
export interface MusicVideo {
  title: string;
  video: Video;
  meta: Meta;
}

export interface Video {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: ImagesVideo;
}

export interface ImagesVideo {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface Meta {
  title: string;
  author: string;
}
