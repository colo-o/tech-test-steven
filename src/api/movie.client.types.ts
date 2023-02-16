export interface MovieClientInterface {
  /**
   * getMovies
   * Retrieves a list of movies with their correspoding category
   */
  getMovies(): Promise<MovieEntity[]>;
}

export type MovieEntity = {
  title: string;
  photoUrL: string;
  id: string;
  category: CategoryEntity;
};

export type CategoryEntity = string;
