type Sort = {
    id: number;
    name: string;
};

type MovieList = {
    backdrop_path: string;
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
};
type Genres = {
    name: string;
};

type DetailsMovie = MovieList & {
    budget: number;
    genres: Genres[];
    origin_country: string;
    overview: string;
    release_date: string;
    tagline: string;
};

type Cast = {
    character: string;
    name: string;
    profile_path: string;
    id: number;
};

type Crew = {
    name: string;
};

type CastList = {
    cast: Cast[];
    crew: Crew[];
    id: number;
};

type MoreMovieDetails = {
    detailsMovie: DetailsMovie;
    castList: CastList;
    idFavorite: number[];
};

export type { Sort, MovieList, DetailsMovie, Cast, Crew, CastList, MoreMovieDetails };
