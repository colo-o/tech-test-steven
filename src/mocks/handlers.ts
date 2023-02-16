import { rest } from 'msw';

import { generateMovieList } from 'mocks/movies';

export const handlers = [
  rest.get(/movies/, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateMovieList(10, 'staticInfo')));
  }),
];
