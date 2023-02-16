import axios, { AxiosError } from 'axios';

import { MovieClient } from 'api/movie.client';
import { rest, server } from 'mocks/server';
import { generateMovieList } from 'mocks/movies';

const client = new MovieClient(
  axios.create({
    baseURL: 'growi.host',
    timeout: 10,
  })
);

describe('[API] Movie Client', () => {
  it('[200] Succesful movies response', async () => {
    const movieStub = generateMovieList(10, 'staticInfo');
    const response = await client.getMovies();

    expect(response).toEqual(movieStub);
  });

  it('[500] Error movies response', async () => {
    server.use(
      rest.get(new RegExp('/movies'), async (_, res, ctx) => res(ctx.status(500)))
    );

    try {
      const response = await client.getMovies();
      expect(response).toThrowError();
    } catch (error: unknown) {
      expect((error as AxiosError).response?.status).toEqual(500);
    }
  });
});
