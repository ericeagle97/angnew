import { Movie } from "../movie/Movie";

export interface Favorites {
    favorites: Movie[];
    total: number;
}