import { MovieEntity } from "api/movie.client.types";

export const extractCategoriesFromMovies = (movies: MovieEntity[] | undefined) => movies ? [...new Set(movies?.map(movie => movie.category))] : [];
