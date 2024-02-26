import { Demographic, External } from "./externalTypes";
import { ExplicitGenre, Genre } from "./genre";
import { Images } from "./images";
import { Licensor, Producer, Studio } from "./license";
import { Aired, Broadcast, Title, Trailer } from "./props";
import { Theme, Theme2 } from "./theme";
import { Relation } from "./relations";
import { Streaming } from "./streaming";

export interface FullAnime {
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
  relations: Relation[];
  theme: Theme2;
  external: External[];
  streaming: Streaming[];
}
