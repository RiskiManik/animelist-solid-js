import { Demographic } from "./externalTypes";
import { ExplicitGenre, Genre } from "./genre";
import { Images } from "./images";
import { Licensor, Producer, Studio } from "./license";
import { Aired, Broadcast, Pagination, Title, Trailer } from "./props";
import { Theme } from "./theme";

export interface RootAnime {
  data: Anime[];
  pagination: Pagination;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Theme[];
  demographics: Demographic[];
}
