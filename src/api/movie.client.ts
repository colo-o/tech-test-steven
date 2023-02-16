import axios, { AxiosInstance } from 'axios';

import config from 'core/configuration';

import { MovieClientInterface, MovieEntity } from 'api/movie.client.types';

export class MovieClient implements MovieClientInterface {
  constructor(private readonly http: AxiosInstance) {}

  public async getMovies() {
    const { data } = await this.http.get<{ movies: MovieEntity[] }>('/movies');

    return data?.movies;
  }
}

export default new MovieClient(axios.create(config.hosts.movies));
