import axios, { AxiosInstance } from 'axios';

import config from 'core/configuration';
import { MovieClientInterface, MovieEntity } from 'api/movie.client.types';

export class MovieClient implements MovieClientInterface {
  constructor(private readonly http: AxiosInstance) {}

  public async getMovies() {
    const { data } = await this.http.get<MovieEntity[]>('/movies');

    return data;
  }
}

export default new MovieClient(axios.create(config.hosts.movies));
